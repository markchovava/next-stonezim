import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface AirlineInterface{
    id: string | number,
    userId: string | number,
    user: UserInterface
    name: string,
    description: string,
    priorityId: string | number,
    createdAt: string,
    updatedAt: string,
}


export const AirlineEntity: AirlineInterface = {
    id: '',
    userId: '',
    user: UserEntity,
    name: '',
    description: '',
    priorityId: '',
    createdAt: '',
    updatedAt: '',
}