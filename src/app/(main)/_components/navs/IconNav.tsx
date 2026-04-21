"use client"

import Link from "next/link"
import { useNavStore } from "../../_store/useNavStore"
import IconDefault from "@/_components/icons/IconDefault"


export default function IconNav() {
    const { navIconList } = useNavStore()
  return (
    <>
    <div className="hidden lg:flex items-center gap-4">
        {navIconList.map((i, key) => (
            <Link key={key} href={i.href} 
                className={`group flex items-center 
                justify-center rounded-full w-10 h-10 border border-white hover:border-amber-300`}>
                <IconDefault 
                    type={i.iconType} 
                    css="text-lg group-hover:scale-110 ease-in-out transition-all duration-200 group-hover:text-amber-300" /> 
            </Link>
        ))}   
    </div>
    <div className="lg:hidden flex items-center justify-center gap-4">
        {navIconList.map((i, key) => (
            <Link key={key} href={i.href} 
                className={`group flex items-center 
                justify-center rounded-full w-10 h-10 border border-blue-900 hover:border-blue-700`}>
                <IconDefault 
                    type={i.iconType} 
                    css="text-lg group-hover:scale-110 ease-in-out transition-all duration-200 text-blue-900 group-hover:text-blue-700" /> 
            </Link>
        ))}   
    </div>
    </>
  )
}
