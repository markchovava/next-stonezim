"use client"


interface pInterface{
    name: string
    
}
export default function Sticker({name}: pInterface) {
    const i = name.toLowerCase()

    switch(i){
        case 'featured':
            return(
                <span className="rounded uppercase text-sm bg-green-600 text-white px-1.5 py-0.5 font-normal tracking-wide">
                    {name}
                </span>
            )
        case 'culture':
            return(
                <span className="rounded uppercase text-sm bg-blue-600 text-white px-1.5 py-0.5 font-normal tracking-wide">
                    {name}
                </span>
            )
        default:
            return(
                <span className="rounded uppercase text-sm bg-gray-600 text-white px-1.5 py-0.5 font-normal tracking-wide">
                    {name}
                </span>
            )
    }
 
}
