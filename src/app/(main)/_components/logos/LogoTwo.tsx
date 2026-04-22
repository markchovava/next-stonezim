"use client"

import Link from "next/link"


export default function LogoTwo() {
  return (
    <Link href='/'>
      <img src={`/assets/images/logo02.png`} alt="Image" className="h-16 w-auto" />
    </Link>
  )
}
