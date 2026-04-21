

interface PropInterface{
    name: string
}

export default function TitleOne({ 
    name 
}: PropInterface) {
  return (
    <h1 className="font-light text-5xl">{name}</h1>
  )
}
