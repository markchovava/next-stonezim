"use client"

import IconDefault from "@/_components/icons/IconDefault"


interface Props{
    placeholder: string
    name: string
    value: string
    status: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
}

export default function SearchForm({
    placeholder,
    name,
    value,
    status,
    onChange,
    onSubmit
}: Props) {
  return (
    <form 
        onSubmit={onSubmit} 
        className="w-full flex items-center justify-start border border-gray-300 rounded-xl">
        <input 
            type="text" 
            placeholder={placeholder} 
            value={value}
            name={name}
            onChange={onChange}
            className="h-12 w-[90%] px-4 outline-none border-r border-gray-300" />
        <button type="submit" className="w-[10%] cursor-pointer transition__effect hover:scale-110 flex items-center justify-center">
            {status ?
                <IconDefault type="dot" css="text-2xl animate-pulse text-gray-600" />
                :
                <IconDefault type="search" css="text-xl text-gray-600" />
            }
        </button>
    </form>
  )
}
