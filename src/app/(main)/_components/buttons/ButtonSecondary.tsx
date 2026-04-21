"use client"
import IconDefault from '@/_components/icons/IconDefault'


interface pInterface{
    name: string,
    type?: 'submit' | 'reset' | 'button'
    onClick?: () => void
}

export default function ButtonSecondary({
    name,
    type='button',
    onClick,
}: pInterface) {
  return (
    <button 
        type={type}
        onClick={onClick}
        className={`group font-semibold cursor-pointer hover:text-blue-800 ease-in-out 
        transition-all flex items-center justify-center gap-1`}>
        {name}
        <IconDefault 
            type="right" 
            css="ease-in-out transition-all duration-200 group-hover:translate-x-1" />
    </button>
  )
}
