"use client"

import Link from "next/link"
import Image from "../images/Image"
import IconDefault from "@/_components/icons/IconDefault"



interface PropInterface{
    href: string
    name: string
    image: string
}

export default function CardVisa({
    name,
    image,
    href
}: PropInterface) {
  return (
    <>
    <Link href={href} className='group'>
        <div className='w-full rounded-xl overflow-hidden bg-white drop-shadow hover:drop-shadow-lg ease-in-out transition-all duration-200'>
            <div className='aspect-7/5 bg-gray-600 overflow-hidden'>
                <Image image={image} />
            </div>
                <div className='group-hover:text-blue-800 w-full px-4 py-3 flex items-center justify-between gap-4'>
                    <span className='font-medium'>
                        {name}
                    </span>
                    <IconDefault 
                        type='right' 
                        css='text-xl ease-in-out transition-all duration-200 group-hover:translate-x-1' 
                    />
                </div>
        </div>
    </Link>
    </>
  )
}
