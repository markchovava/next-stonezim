export interface AuthInterface{
    name: string
    password: string
    passwordConfirm: string
    email: string
    phone: string
    createdAt: string
    updatedAt: string
}


export const AuthEntity: AuthInterface = {
    name: '',
    password: '',
    passwordConfirm: '',
    email: '',
    phone: '',
    createdAt: '',
    updatedAt: '',
}