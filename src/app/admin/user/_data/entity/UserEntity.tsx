export interface UserInterface{
    name: string
    email: string
    phone: string
    password: string
    code: string
    image: string
    imageFile: File | null
    address: string
    priority: string | number
    createdAt: string
    updatedAt: string
}


export const UserEntity: UserInterface = {
    name: '',
    email: '',
    phone: '',
    code: '',
    password: '',
    image: '',
    imageFile: null,
    address: '',
    priority: '',
    createdAt: '',
    updatedAt: '',
}