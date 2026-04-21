"use client"

import Link from "next/link"
import { useNavStore } from "../../_store/useNavStore"
import IconNav from "./IconNav"
import Logo from "../logos/Logo"
import NavTop from "./NavTop"


export default function Nav() {
    const { navList } = useNavStore()
  return (
    <>
    <nav className='w-full h-30 absolute z-20 text-white'>
        <div className="">
            <NavTop />
        </div>

        <div className='container__primary flex items-center justify-between pt-6'>
            <Logo />
            <ul className="flex items-center justify-start gap-4">
                {navList.map((i, key) => (
                    <NavItem 
                        key={key} 
                        name={i.name} 
                        href={i.href} 
                    />
                ))}
            </ul>
            <IconNav />
 
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
            <li className="font-medium hover:text-amber-200 ease-in-out transition-all duration-200">
            {name}
            </li>
        </Link>
    )
}



