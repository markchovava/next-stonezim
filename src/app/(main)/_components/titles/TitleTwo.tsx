
interface PropInterface{
    name: string
    css?: string
}

export default function TitleTwo({ 
    name,
    css='text-gray-800'
}: PropInterface) {
  return (
    <h3 className={`text-3xl font-medium ${css}`}>
        {name}
    </h3>
  )
}
