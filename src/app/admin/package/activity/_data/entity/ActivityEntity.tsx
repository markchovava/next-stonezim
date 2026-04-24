import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface ActivityInterface{
    id: number | string
    name: string
    priority: string | number
    userId: number | string
    user: UserInterface
    createdAt: string
    updatedAt: string
}


export const ActivityEntity: ActivityInterface = {
    id: '',
    name: '',
    priority: '',
    userId: '',
    user: UserEntity,
    createdAt: '',
    updatedAt: ''
}