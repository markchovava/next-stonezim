export interface CabinSpecInterface{
    id: string | number,
    userId: string | number,
    name: string,
    value: string,
    airlineId: string | number,
    priority: string | number,
    createdAt: string,
    updatedAt: string,
}


export const CabinSpecEntity: CabinSpecInterface = {
    id: '',
    userId: '',
    name: '',
    airlineId: '',
    value: '',
    priority: '',
    createdAt: '',
    updatedAt: '',
}