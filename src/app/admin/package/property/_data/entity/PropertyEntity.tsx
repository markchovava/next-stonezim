import { CityEntity, CityInterface } from "../../../city/_data/entity/CityEntity"
import { RoomInterface } from "./RoomEntity"



export interface PropertyInterface{
    name: string
    address: string
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
    propertyId: number | string
    property: PropertyInterface
    createdAt: string
    updatedAt: string
}

export const PropertyImageEntity: PropertyImageInterface = {
    id: '',
    imageFile: null,
    image: '',
    propertyId: '',
    property: PropertyEntity,
    createdAt: '',
    updatedAt: ''
}

