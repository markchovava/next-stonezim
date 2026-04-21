"use client"

import { ReactNode } from "react"


interface Props{
    label: string
    value: ReactNode
}
export default function AdminRecord({
    label,
    value
}: Props) {
  return (
    <>
        <div className='w-full flex lg:flex-row flex-col gap-1 items-start justify-start'>
            <div className='w-[20%] font-medium text-gray-600'>
                {label}:
            </div>
            <div className='w-[75%] text-gray-900'>
                {value}
            </div>
        </div>
    </>
  )
}
