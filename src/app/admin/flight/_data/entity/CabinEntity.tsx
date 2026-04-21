import { AirlineEntity, AirlineInterface } from "./AirlineEntity"
import { CabinSpecInterface } from "./CabinSpecEntity"

export interface CabinInterface{
    id: string | number,
    userId: string | number,
    name: string,
    description: string,
    airline: AirlineInterface
    airlineId: string | number,
    price: string | number,
    priority: string | number,
    cabinSpecs: CabinSpecInterface[]
    createdAt: string,
    updatedAt: string,
}


export const CabinEntity: CabinInterface = {
    id: '',
    userId: '',
    name: '',
    airline: AirlineEntity,
    airlineId: '',
    cabinSpecs: [],
    price: '',
    description: '',
    priority: '',
    createdAt: '',
    updatedAt: '',
}