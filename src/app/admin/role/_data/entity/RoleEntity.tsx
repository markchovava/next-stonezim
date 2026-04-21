export interface RoleInterface{
    name: string
    level: string | number
    userId: number | string
}


export const RoleEntity: RoleInterface = {
    name: '',
    level: '',
    userId: '',
}