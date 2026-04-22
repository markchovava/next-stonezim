import { ReactNode } from "react"
import { CityInterface } from "../../../city/_data/entity/CityEntity"
import { PackageActivityInterface } from "./PackageActivityEntity"
import { PackageReviewInterface } from "./PackageReviewEntity"


export interface PackageInterface{
    id: number | string
    importantInfo: ReactNode
    policy: ReactNode
    name: string
    ratingData: string
    rating: number | string
    description: ReactNode,
    properties: any[],
    city: CityInterface[],
    reviews: PackageReviewInterface[],
    activities: PackageActivityInterface[],
    createdAt: string
    updatedAt: string
} 

export const PackageEntity: PackageInterface = {
    id: '',
    importantInfo: <></>,
    policy: <></>,
    name: '',
    ratingData: '',
    rating: 0,
    description: <></>,
    properties: [],
    city: [],
    reviews: [],
    activities: [],
    createdAt: '',
    updatedAt: '',
}