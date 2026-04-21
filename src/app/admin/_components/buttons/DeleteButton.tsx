"use client"
import IconDefault from '@/_components/icons/IconDefault'


interface Props{
    onClick: () => void
}
export default function DeleteButton({
    onClick
}: Props) {
  return (
    <button 
        onClick={onClick} 
        type="button" 
        className="cursor-pointer">
        <IconDefault 
            type="delete" 
            css="text-xl hover:scale-110 hover:text-red-700 transition__effect" />
    </button>
  )
}
