import { NoImage } from "@/_data/sample/NoImage";
import { image } from "motion/react-client";

export const GuideCategories = [
    {id: 1, name: 'Featured', href: '#'},
    {id: 1, name: 'Culture', href: '#'},
]

export const GuideData = [
    {
        id: 1, 
        name: 'Grand Canyon Hiking Tour', 
        href: '/guides/grand-canyon', 
        image: '/assets/images/banner/01.jpg', 
        categories: GuideCategories 
    },
    {
        id: 2, 
        name: 'Scuba Diving in Belize', 
        href: '/guides/belize-diving', 
        image: '/assets/images/guide/01.jpg', 
        categories: [GuideCategories[0]] 
    },
    {
        id: 3, 
        name: 'Wine Tasting in Tuscany', 
        href: '/guides/tuscany-wine', 
        image: '/assets/images/guide/02.jpg', 
        categories: [GuideCategories[1]] 
    },
    {
        id: 4, 
        name: 'Alpine Skiing in Chamonix', 
        href: '/guides/chamonix-ski', 
        image: '/assets/images/guide/03.jpg',
        categories: [GuideCategories[0]] 
    },
    {
        id: 5, 
        name: 'Kyoto Temple Walk', 
        href: '/guides/kyoto-temples', 
        image: '/assets/images/guide/04.jpg',
        categories: [GuideCategories[1]] 
    },
]