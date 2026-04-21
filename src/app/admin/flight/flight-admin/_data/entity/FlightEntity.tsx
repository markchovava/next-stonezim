import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"
import { AirlineEntity, AirlineInterface } from "../../../_data/entity/AirlineEntity"

export interface FlightInterface{
    id: string | number
    departingDate: string
    departingTime: string
    arrivingDate: string
    arrivingTime: string
    from: string
    to: string
    airlineName: string
    airline: AirlineInterface
    airlineId: string | number
    stops: string
    price: string | number
    userId: number | string
    user: UserInterface
}


export const FlightEntity: FlightInterface = {
    id: '',
    departingDate: '',
    departingTime: '',
    arrivingDate: '',
    arrivingTime: '',
    airlineName: '',
    airlineId: '',
    airline: AirlineEntity,
    from: '',
    to: '',
    price: '',
    stops: '',
    userId: '',
    user: UserEntity,
}