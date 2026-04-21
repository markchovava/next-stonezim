"use client"


interface PropInterface {
    id?: string | number
    airline: string 
    departingTime: string 
    arrivingTime: string 
    from: string 
    to: string 
    duration: string 
    stops: string 
    price: number
}

export default function CardFlight({
    id,
    airline,
    departingTime,
    arrivingTime,
    from,
    to,
    duration, 
    stops,
    price,
}: PropInterface) {
  return (
    <div className='w-full cursor-pointer bg-white hover:drop-shadow-md ease-in-out duration-200 transition-all grid lg:grid-cols-5 grid-cols-1 gap-8 rounded-xl border border-gray-200 overflow-hidden px-4 py-6'>
        <div className='lg:col-span-2'>
            <div className='gap-2 grid grid-cols-2'>
                <div className=''>
                    <p className='text-xs font-medium text-gray-600'>Departing Time:</p>
                    <p className='text-sm text-black font-medium'>{departingTime}</p>
                </div>
                <div>
                    <p className='text-xs font-medium text-gray-600'>Arriving Time:</p>
                    <p className='text-sm text-black font-medium'>{arrivingTime}</p>
                </div>
            </div>
            <div className='font-light gap-2 grid grid-cols-2'>
                <p>{from} - {to}</p>
                <p>{airline}</p>
            </div>
        </div>
        <div className='lg:col-span-2 flex gap-4 items-start lg:justify-center justify-start lg:border-x lg:border-gray-300'>
            <div className=''>
                <p className='text-xs font-medium text-gray-600'>Flight Duration:</p>
                <p className='text-sm text-black font-medium'>{duration}</p>
            </div>
            <div className=''>
                <p className='text-xs font-medium text-gray-600'>Stops:</p>
                <p className='text-sm text-black font-medium'>{stops}</p>
            </div>
        </div>
        <div className='lg:col-span-1 flex flex-col lg:items-end items-start justify-start'>
            <p className='font-medium text-lg'>{price ? '$' + price : 'Not Available'}</p>
            <p className='text-xs text-gray-700'>Return per traveller</p>    
        </div>
    </div>
  )
}
