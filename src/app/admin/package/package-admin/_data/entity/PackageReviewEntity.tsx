import { PackageEntity, PackageInterface } from "./PackageEntity"

export interface PackageReviewInterface {
    id: number | string
    name: string
    email: string
    rate: number | string
    comment: string
    userId: number | string
    packageId: number | string
    package: PackageInterface
    createdAt: string
    updatedAt: string
}


export const PackageReviewEntity: PackageReviewInterface = {
    id: '',
    name: '',
    email: '',
    rate: 0,
    comment: '',
    userId: '',
    packageId: '',
    package: PackageEntity,
    createdAt: '',
    updatedAt: ''
}