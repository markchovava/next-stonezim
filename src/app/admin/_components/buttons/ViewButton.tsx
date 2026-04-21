"use client"
import IconDefault from '@/_components/icons/IconDefault'


interface Props{
    css?: string
}

export default function ViewButton({
    css='text-xl'
}: Props) {
  return (
    <button type="button" className="cursor-pointer">
        <IconDefault 
            type="eye" 
            css={`${css} hover:scale-110 hover:text-blue-700 transition__effect`} />
    </button>
  )
}
