export interface PackageInterface{
    from: string
    to: string
    departingDate: string
    rooms: number | string
    adults: number | string
    children: number | string
    infants: string | number
}


export const PackageEntity: PackageInterface = {
    from: '',
    to: '',
    departingDate: '',
    adults: 1,
    children: 0,
    infants: 0,
    rooms: 1,
}