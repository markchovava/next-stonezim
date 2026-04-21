
export interface HelpAdminInterface{
    id: string | number
    title: string
    details: string
    category: string
    priority: string | number
    createdAt: string
    updatedAt: string
}
   
export const HelpAdminEntity: HelpAdminInterface = {
    id: '',
    title: '',
    details: '',
    category: '',
    priority: '',
    createdAt: '',
    updatedAt: ''
}