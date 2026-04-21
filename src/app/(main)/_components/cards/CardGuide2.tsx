"use client"

import Link from "next/link"
import Sticker from "../stickers/Sticker"
import Image from "../images/Image"


interface PropInterface{
    href: string
    image?: string
    name: string
    labels?: any[]
}

export default function CardGuide2({
    href,
    name,
    image,
    labels,
}: PropInterface) {
  return (
    <div className="flex items-start justify-start gap-5">
        <div className="bg-gray-600 w-[30%] h-30 rounded-2xl overflow-hidden drop-shadow">
            {image && <Image image={image} />}
        </div>
        <div className="w-[70%] py-2">
            {labels &&
            <Link href={labels[0].href}>
                <Sticker name={labels[0].name} />
            </Link>
            }
            <div className="h-3 w-full" />
            <Link href={href}>
                <h2 className={`text-2xl leading-tight ease-in-out transition-all font-semibold text-gray-800 hover:text-blue-800`}>
                    {name}
                </h2>
            </Link>
        </div>
    </div>
  )
}
