export default interface Project {
    id: number,
    name: string,
    roomID: number,
    managersID: number[],
    membersID: number[]
}