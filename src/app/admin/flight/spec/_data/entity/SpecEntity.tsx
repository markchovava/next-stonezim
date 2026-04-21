import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"


export interface SpecInterface{
    id: string | number
    userId: string | number
    user: UserInterface
    name: string
    value: string
    priority: string | number
    createdAt: string
    updatedAt: string
}
   


export const SpecEntity: SpecInterface = {
    id: '',
    userId: '',
    user: UserEntity,
    name: '',
    value: '',
    priority: '',
    createdAt: '',
    updatedAt: '',
}