

interface PropInterface{
    name: string
    css?: string
}

export default function TitleThree({ 
    name,
    css='text-gray-800 mb-6'
}: PropInterface) {
  return (
    <h6 className={`${css} font-medium text-lg`}>
        {name}
    </h6>
  )
}
