export default interface Organization {
    id: number,
    name: string,
    ownerID: number,
    adminsID: number[],
    membersID: number[],
    projectsID: number[]
}