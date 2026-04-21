"use client"
import IconDefault from '@/_components/icons/IconDefault'
import Link from 'next/link'



interface PropInterface{
    image: string
    name: string
    href: string
    city: string
    price: string | number
    accommodation: string
    airline: string
    duration: string
    route: string
    transport: string
}

export default function CardPackage({
    image,
    name,
    href,
    city,
    price,
    accommodation,
    airline,
    duration,
    route,
    transport,
}: PropInterface) {
  return (
    <>
     {/* ITEM */}
    <div className="w-full cursor-pointer group overflow-hidden rounded-xl bg-white ease-in-out transition-all duration-200 drop-shadow hover:drop-shadow-lg">
        <div className="w-full aspect-7/5 bg-gray-500 drop-shadow overflow-hidden">
            <img
                alt='Image' 
                src={image} 
                className="w-full h-full object-cover group-hover:scale-110 ease-in-out transition-all duration-200" />
        </div>
        <div className="px-4 pt-3 pb-5">
        <Link href={href}>
            <p className="mb-2 font-medium text-gray-800 leading-4 hover:underline hover:text-blue-800">
            {name}
            </p>
        </Link>
        <p className="text-sm font-light mb-2">
            {city}
        </p>
        <ul className="text-sm space-y-2 mb-3">
            <li className="w-full flex items-center justify-start gap-2 font-light">
                <IconDefault type="house" css="text-lg text-blue-900" />
                {accommodation}
            </li>
            <li className="w-full flex items-center justify-start gap-2 font-light">
            <IconDefault type="airplane" css="text-lg text-blue-900" />
                {airline}
            </li>
            <li className="w-full flex items-center justify-start gap-2 font-light">
            <IconDefault type="route" css="text-lg text-blue-900" />
                {route}
            </li>
            <li className="w-full flex items-center justify-start gap-2 font-light">
            <IconDefault type="car" css="text-lg text-blue-900" />
                {transport}
            </li>
            <li className="w-full flex items-center justify-start gap-2 font-light">
            <IconDefault type="time" css="text-lg text-blue-900" />
                {duration}
            </li>
        </ul>
        <div className="flex flex-col items-end justify-center">
            {price &&
                <h6 className="text-blue-800 text-end font-bold text-xl leading-5">
                    {price ? '$' + Number(price).toFixed(2) : 'No Available'}
                </h6>
            }
            <p className="text-xs font-medium text-gray-700">
            per traveller
            </p>
        </div>
        </div>
    </div>
    </>
  )
}
