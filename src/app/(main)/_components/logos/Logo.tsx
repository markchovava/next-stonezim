"use client"

import Link from "next/link"


export default function Logo() {
  return (
    <Link href='/'>
      <img src={`/assets/images/logo.png`} alt="Image" className="h-16 w-auto" />
    </Link>
  )
}
