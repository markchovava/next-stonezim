"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import Title from "@/app/(main)/_components/titles/Title"
import { usePageMetaStore } from "../../_data/store/usePageMetaStore"
import AdminRecord from "@/app/admin/_components/records/AdminRecord"
import { valueWithFallback } from "@/_utils/StringManipulation"



const title = 'View Page Meta'


interface Props{
  id: string | number
}

export default function PageMetaViewPage({
  id
}: Props) {
  const { data, setToggleModal } = usePageMetaStore()

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
                            label='Keywords' 
                            value={valueWithFallback(data.keywords.toString())} 
                        />
                       
                        <AdminRecord 
                            label='Description' 
                            value={valueWithFallback(data.description)} 
                        />
    
                    </div>
                </section>
            </main>
  )
}
