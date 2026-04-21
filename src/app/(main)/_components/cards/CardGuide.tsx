"use client"

import Link from "next/link"
import Sticker from "../stickers/Sticker"


interface PropInterface{
    href: string
    image?: string
    name: string
    labels?: any[]
}

export default function CardGuide({
    href,
    name,
    image,
    labels,
}: PropInterface) {
  return (
    <div className="relative h-full w-full group bg-gray-600 drop-shadow">
        <div className="absolute w-full h-full z-5 top-0 left-0">
            { 
                image && 
                <img src={image} 
                className="w-full h-full object-cover group-hover:scale-110 duration-200 ease-in-out transition-all" 
                alt='Image' /> 
            }
        </div>
        <div className="absolute z-10 top-6 left-5 space-x-2.5">
            {labels && labels.map((i, key) => (
                <Link key={key} href={i.href}>
                    <Sticker name={i.name} />
                </Link>
            ))}
        </div>
        <div className="absolute z-20 bottom-6 left-5">
            <Link href={href}>
                <h2 className="text-3xl ease-in-out transition-all font-semibold text-white border-b-3 border-transparent hover:border-b-white">
                    {name}
                </h2>
            </Link>
        </div>
    </div>
  )
}
