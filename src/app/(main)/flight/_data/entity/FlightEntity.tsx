export interface FlightInterface {
    id: string | number
    from: string
    to: string
    departingDate: string
    returningDate: string
    createdAt: string
    updatedAt: string
}

export const FlightEntity: FlightInterface = {
    id: '',
    from: '',
    to: '',
    departingDate: '',
    returningDate: '',
    createdAt: '',
    updatedAt: '',
}