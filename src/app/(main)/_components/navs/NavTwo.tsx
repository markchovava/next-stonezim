"use client"

import Link from "next/link"
import { useNavStore } from "../../_store/useNavStore"
import NavTop from "./NavTop"
import IconNavTwo from "./IconNavTwo"
import LogoTwo from "../logos/LogoTwo"



export default function NavTwo() {
    const { navList } = useNavStore()
  return (
    <>
    <nav className='w-full h-30 absolute z-20 text-white'>
        <div className="bg-blue-900">
            <NavTop />
        </div>

        <div className='container__primary text-gray-800 flex items-center justify-between pt-6'>
            <LogoTwo />
            <ul className="flex items-center justify-start gap-4">
                {navList.map((i, key) => (
                    <NavItem 
                        key={key} 
                        name={i.name} 
                        href={i.href} 
                    />
                ))}
            </ul>
            <IconNavTwo />
 
        </div>
    </nav>
    </>
  )
}


interface pInterface{
    name: string,
    href: string
}

function NavItem({
    href, 
    name
}: pInterface){
    return(
        <Link href={href}>
            <li className="font-medium hover:text-amber-500 ease-in-out transition-all duration-200">
            {name}
            </li>
        </Link>
    )
}



