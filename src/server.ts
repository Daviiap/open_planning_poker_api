import express from "express";
import { createServer } from 'node:http';
import cors from "cors";
import helmet from "helmet";
import routesV1 from "./routes/v1/v1.routes";
import env from "./env";
import { Server } from 'socket.io';
import jwtUtils from "./utils/jwt.utils";

if (!env.API_PORT) {
    console.log("no port value especified, running on port 3000.");
}
const PORT = env.API_PORT || 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use("/v1", routesV1);

io.use(async (socket, next) => {
    const authToken = socket.handshake.headers.authorization;
    if (authToken) {
        try {
            const authData = jwtUtils.validate(authToken);
            socket.handshake.auth.data = authData;
        } catch (error) {
            next(error as Error);
        }
    }
    next();
});

io.on('connection', async (socket) => {
    socket.on('join-room', (roomId, userName) => {
        if (socket.handshake.auth.data) {
            userName = socket.handshake.auth.data.name;
        }

        if (!userName) {
            socket.disconnect();
        }

        // verifica se o roomID é uma sala que precisa de autenticação

        socket.join(roomId)

        socket.to(roomId).emit('user-connected', socket.id, userName)

        socket.on('disconnect', () => {
            socket.to(roomId).emit('user-disconnected', socket.id)
        })

        socket.on('sync', (userId, userName, voted) => {
            socket.to(userId).emit('sync', socket.id, userName, voted)
        })

        socket.on('vote', userId => {
            socket.to(roomId).emit('register-vote', userId)
        })

        socket.on('show-votes', () => {
            socket.to(roomId).emit('show-votes')
        })

        socket.on('new-vote', () => {
            socket.to(roomId).emit('new-vote')
        })

        socket.on('show-vote', (userId, vote) => {
            socket.to(roomId).emit('show-vote', userId, vote)
        })
    })
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
