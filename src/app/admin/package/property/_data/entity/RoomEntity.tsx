/* 
*   RoomInterface 
*   Defines the structure of a room object, including its name, rating data, description, associated property, and timestamps for creation and updates.
*   
*   RoomEntity 
*   provides a default implementation of the RoomInterface with initial values.
*   
*   RoomDetailInterface 
*   defines the structure of a room detail object, which includes an id, name, value, associated room, and timestamps.
*   
*   RoomDetailEntity 
*   provides a default implementation of the RoomDetailInterface with initial values.
*   
*   RoomImageInterface 
*   defines the structure of a room image object, including an id, image file, image URL, associated room, and timestamps.
*   
*   RoomImageEntity 
*   provides a default implementation of the RoomImageInterface with initial values.
* 
**/

import { PropertyEntity, PropertyInterface } from "./PropertyEntity"


export interface RoomInterface{
    name: string
    ratingData: string
    rating: number | string
    priority: string | number
    description: string
    property: PropertyInterface
    propertyId: number | string
    createdAt: string
    updatedAt: string
}

export const RoomEntity: RoomInterface = {
    name: '',
    ratingData: '',
    rating: 0,
    priority: '',
    description: '',
    property: PropertyEntity,
    propertyId: '',
    createdAt: '',
    updatedAt: ''
}


export interface RoomDetailInterface{
    id: number | string
    name: string
    value: string
    priority: string | number
    roomId: number | string
    room: RoomInterface
    createdAt: string
    updatedAt: string
}

export const RoomDetailEntity: RoomDetailInterface = {
    id: '',
    name: '',
    value: '',
    priority: '',
    roomId: '',
    room: RoomEntity,
    createdAt: '',
    updatedAt: ''
}


export interface RoomImageInterface{
    id: number | string
    imageFile: File | null
    image: string
    priority: string | number
    roomId: number | string
    room: RoomInterface
    createdAt: string
    updatedAt: string
}

export const RoomImageEntity: RoomImageInterface = {
    id: '',
    imageFile: null,
    image: '',
    priority: '',
    roomId: '',
    room: RoomEntity,
    createdAt: '',
    updatedAt: ''
}


