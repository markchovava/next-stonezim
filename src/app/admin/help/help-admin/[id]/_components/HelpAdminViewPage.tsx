"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import Title from "@/app/(main)/_components/titles/Title"
import AdminRecord from "@/app/admin/_components/records/AdminRecord"
import { valueWithFallback } from "@/_utils/StringManipulation"
import { useHelpAdminStore } from "../../_data/store/useHelpAdminStore"



const title = 'View Help'


interface Props{
  id: string | number
}

export default function HelpAdminViewPage({
  id
}: Props) {
  const { data, setToggleModal } = useHelpAdminStore()

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
                            label='Title' 
                            value={valueWithFallback(data.title)} 
                        />
                        <AdminRecord 
                            label='Details' 
                            value={valueWithFallback(data.details)} 
                        />
                        <AdminRecord 
                            label='Priority' 
                            value={valueWithFallback(data.priority)} 
                        />
                        <AdminRecord 
                            label='Created At' 
                            value={valueWithFallback(data.createdAt)} 
                        />
                        <AdminRecord 
                            label='Updated At' 
                            value={valueWithFallback(data.updatedAt)} 
                        />
    
                    </div>
                </section>
            </main>
  )
}
