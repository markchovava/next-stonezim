export interface CategoryInterface{
    id: number | string
    name: string
    slug: string
    priority: string | number
    userId: number | string
    createdAt: string
    updatedAt: string
}


export const CategoryEntity: CategoryInterface = {
    id: '',
    name: '',
    slug: '',
    priority: '',
    userId: '',
    createdAt: '',
    updatedAt: ''
}