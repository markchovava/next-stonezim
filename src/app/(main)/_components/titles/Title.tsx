"use client"

import Link from "next/link"
import ButtonSecondary from "../buttons/ButtonSecondary"


interface PropInterface{
    name: string
    href?: string
    btnName?: string
    css?: string
}

export default function Title({
    name,
    href,
    btnName,
    css = 'mb-5'
}: PropInterface) {
  return (
    <div className={`${css} flex items-center justify-between`}>
        <h1 className="font-light text-5xl">{name}</h1>
        {href && btnName && 
          <Link href={href}>
              <ButtonSecondary name={btnName} />
          </Link>
        }
    </div>
  )
}
