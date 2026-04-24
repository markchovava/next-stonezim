import { CityEntity, CityInterface } from "../../../city/_data/entity/CityEntity"
import { RoomInterface } from "./RoomEntity"



export interface PropertyInterface{
    name: string
    address: string
    priority: string | number
    cityId: number | string
    city: CityInterface
    rooms: RoomInterface[]
    images: PropertyImageInterface[]
    createdAt: string
    updatedAt: string
}

export const PropertyEntity: PropertyInterface = {
    name: '',
    address: '',
    cityId: '',
    priority: '',
    city: CityEntity,
    rooms: [],
    images: [],
    createdAt: '',
    updatedAt: ''
}


export interface PropertyImageInterface{
    id: number | string
    imageFile: File | null
    image: string
    priority: string | number
    propertyId: number | string
    property: PropertyInterface
    createdAt: string
    updatedAt: string
}

export const PropertyImageEntity: PropertyImageInterface = {
    id: '',
    imageFile: null,
    image: '',
    priority: '',
    propertyId: '',
    property: PropertyEntity,
    createdAt: '',
    updatedAt: ''
}

