interface aInterface{
    name: string
}

export default function AsideSubtitle({name}: aInterface){
    return(
         <h6 className='font-medium text-gray-700 border-b border-gray-300 mb-2 pb-1'>
            {name}
        </h6>
    )
}