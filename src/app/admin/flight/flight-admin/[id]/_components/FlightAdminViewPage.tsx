"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import Title from "@/app/(main)/_components/titles/Title"
import AdminRecord from "@/app/admin/_components/records/AdminRecord"
import { valueWithFallback } from "@/_utils/StringManipulation"
import { useFlightStore } from "../../_data/store/useFlightStore"



const title = 'View Flight'


interface Props{
  id: string | number
}

export default function FlightAdminViewPage({
  id
}: Props) {
  const { data, setToggleModal } = useFlightStore
  ()

  return (
    <main className="pt-20 pb-24">
        <section className="container__primary">
            <Title name={title} css='border-b pb-2 mb-3 border-gray-300' />

            <div className='flex items-center justify-end mb-2'>
                <Button 
                    name='Edit' 
                    onClick={() => setToggleModal(true)} 
                />
            </div>
            
            <div className='w-full bg-white drop-shadow-lg rounded-xl px-6 py-6 space-y-4'>
                
                <AdminRecord 
                    label='Departing Date' 
                    value={valueWithFallback(data.departingDate)} 
                />
                <AdminRecord 
                    label='Arriving Date' 
                    value={valueWithFallback(data.arrivingDate)} 
                />
                <AdminRecord 
                    label='Departing Time' 
                    value={valueWithFallback(data.departingTime)} 
                />
                <AdminRecord 
                    label='Arriving Time' 
                    value={valueWithFallback(data.arrivingTime)} 
                />
                <AdminRecord 
                    label='Departing From' 
                    value={valueWithFallback(data.from)} 
                />
                <AdminRecord 
                    label='Arriving To' 
                    value={valueWithFallback(data.to)} 
                />
                <AdminRecord 
                    label='Airline Name' 
                    value={valueWithFallback(data.airlineName)} 
                />
               

            </div>
        </section>
    </main>
  )
}
