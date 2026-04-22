export interface PackageActivityInterface{
    id: number | string
    name: string
    description: string
    packageId: number | string
    iconType: string
    createdAt: string
    updatedAt: string
}


export const PackageActivityEntity: PackageActivityInterface = {
    id: '',
    name: '',
    description: '',
    packageId: '',
    iconType: '',
    createdAt: '',
    updatedAt: ''
}