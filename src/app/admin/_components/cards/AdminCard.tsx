"use cleint"

import IconDefault from "@/_components/icons/IconDefault"
import Link from "next/link"


interface Props{
    href: string
    css: string
    icon: string
    name: string
}

export default function AdminCard({
    href,
    css,
    icon,
    name,
}: Props) {
  
    return (
    <Link href={href}>
        <div className={`${css} rounded-xl flex items-center justify-center gap-4 px-4 py-6 hover:drop-shadow-lg   
        transition__effect bg-linear-to-br hover:bg-linear-to-br `}>
        <div className="w-[25%] flex items-center justify-center border-r border-gray-300">
            <IconDefault 
                type={icon} 
                css="text-white text-3xl" 
            />
        </div>
        <div className="w-[75%] flex items-center justify-start">
            <h3 className="text-2xl font-bold text-white">
                {name}
            </h3>
        </div>
        </div>
    </Link>
  )
}
