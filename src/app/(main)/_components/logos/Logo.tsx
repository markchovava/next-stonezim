"use client"

import Link from "next/link"


interface PropInterface{
  color?: string
}

export default function Logo({
  color='text-white'
}: PropInterface) {
  return (
    <Link href='/'>
        <h6 className={`${color} font-bold text-[2rem] tracking-tighter`}>
            Famba<span className="text-amber-400">Now</span>
        </h6>
    </Link>
  )
}
