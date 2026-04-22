import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface CityInterface{
    id: number | string
    name: string
    imageFile: File | null
    image: string
    userId: number | string
    user: UserInterface
    createdAt: string
    updatedAt: string
}


export const CityEntity: CityInterface = {
    id: '',
    name: '',
    imageFile: null,
    image: '',
    userId: '',
    user: UserEntity,
    createdAt: '',
    updatedAt: ''
}