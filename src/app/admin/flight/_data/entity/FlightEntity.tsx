import { AirlineEntity, AirlineInterface } from "./AirlineEntity"

export interface FlightInterface{
    id: string | number
    departingTime: string
    arrivingTime: string
    from: string
    to: string
    airline: AirlineInterface
    airlineId: string | number
    stops: string
    userId: number | string
}


export const FlightEntity: FlightInterface = {
    id: '',
    departingTime: '',
    arrivingTime: '',
    airline: AirlineEntity,
    from: '',
    to: '',
    airlineId: '',
    stops: '',
    userId: '',
}