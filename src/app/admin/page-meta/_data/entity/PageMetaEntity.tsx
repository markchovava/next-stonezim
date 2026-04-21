export interface PageMetaInterface{
    title: string
    keywords: string[] | number[]
    description: string
    priority: number | string
    createdAt: string
    updatedAt: string
}


export const PageMetaEntity: PageMetaInterface = {
    title: '',
    keywords: [],
    description: '',
    priority: '',
    createdAt: '',
    updatedAt: '',
}