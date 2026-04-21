"use client"

import { useState } from "react"
import AsideSubtitle from "../../_components/titles/AsideSubtitle"
import TitleThree from "../../_components/titles/TitleThree"
import { AirlineData, FlightClassData } from "../_data/sample/FlightData"



export default function FlightAside() {
  return (
    <div className="bg-white drop-shadow pt-6 pb-12 px-4 rounded-xl">
        <TitleThree name='Filter By' css='text-gray-700 mb-2' />
        <AsideSubtitle name="Airlines" />
        <ul className='text-gray-700 font-normal space-y-3'>
            {AirlineData &&
                AirlineData.map((i, key) => (
                    <AsideItem 
                        key={key} 
                        name={i.name} 
                        price={i.price} />
                ))
            }
        </ul>
        <div className="h-6"></div>
        <h6 className='font-medium text-gray-700 border-b border-gray-300 mb-2 pb-1'>
            Airlines
        </h6>
        <ul className='text-gray-700 font-normal space-y-3'>
            {FlightClassData &&
                FlightClassData.map((i, key) => (
                    <AsideItem 
                        key={key} 
                        name={i.name} 
                        price={i.price} />
                ))
            }
        </ul>
    </div>
  )
}



interface pInterface {
    name: string;
    price: string | number;
}

function AsideItem({ name, price }: pInterface) {
    // 1. Create a state to track if the item is selected
    const [isChecked, setIsChecked] = useState(false);

    // 2. Toggle function
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <li 
            onClick={handleToggle} // 3. Make the whole row clickable
            className='cursor-pointer group w-full flex items-center justify-between gap-4'
        >
            <p className='flex items-center justify-start gap-2 group-hover:text-blue-80 font-light'>
                <input 
                    type='checkbox' 
                    readOnly // Since we handle the click on the <li>
                    checked={isChecked} // 4. Bind the state to the checkbox
                    className="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500 pointer-events-none" 
                />
                <span className='border-b-2 border-transparent group-hover:border-b-2 group-hover:border-b-blue-800 group-hover:text-blue-800'>
                    {name}
                </span>
            </p>
            {price &&
                <span className='font-medium group-hover:text-blue-800'>
                    ${price}
                </span>
            }
        </li>
    );
}
