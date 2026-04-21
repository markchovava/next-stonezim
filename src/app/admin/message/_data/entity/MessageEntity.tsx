
export interface MessageInterface{
    id: string | number
    name: string
    title: string
    email: string
    message: string
    status: string
    priority: string | number
    createdAt: string
    updatedAt: string
}
   
export const MessageEntity: MessageInterface = {
    id: '',
    name: '',
    title: '',
    email: '',
    status: '',
    message: '',
    priority: '',
    createdAt: '',
    updatedAt: '',
}