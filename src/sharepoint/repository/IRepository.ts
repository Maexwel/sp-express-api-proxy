// Repository base interface used to create repository to access SharePoint
// When you want to access SharePoint Data, you should create a repository that will wrap all the SharePoint logic
export interface IRepository<T> {

    getBydId?(id: number): T,
    fetch(): T[],
    update?(args: T): T,
    delete?(id: number): boolean,
}