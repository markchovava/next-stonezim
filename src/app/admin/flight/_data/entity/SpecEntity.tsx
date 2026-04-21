import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface SpecInterface{
    id: string | number
    name: string
    value: string
    userId: string | number
    user: UserInterface
    createdAt: string
    updatedAt: string
}

export const SpecEntity: SpecInterface = {
    id: '',
    name: '',
    value: '',
    userId: '',
    createdAt: '',
    updatedAt: '',
    user: UserEntity
}