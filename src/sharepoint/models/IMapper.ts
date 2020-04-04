// Base interface used to define Mappers
// Mappers are modules that convert data of one type to another
// It is used to map data from SharePoint to internal model
export interface IMapper<T, V> {
    map(args: V): T,
    mapBack(args: T): V,
}