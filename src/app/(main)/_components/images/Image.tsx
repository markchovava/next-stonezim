"use client"


interface PropInterface{
    image: string
}

export default function Image({
    image
}: PropInterface) {
 
    return (
        <>
            <img 
                src={image} 
                className={`w-full h-full object-cover group-hover:scale-110 
                duration-200 ease-in-out transition-all`}
                alt='Image' 
            /> 
        </>
  )
}
