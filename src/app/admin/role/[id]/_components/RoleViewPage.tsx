"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import Title from "@/app/(main)/_components/titles/Title"
import { useRoleStore } from "../../_data/store/useRoleStore"
import AdminRecord from "@/app/admin/_components/records/AdminRecord"
import { valueWithFallback } from "@/_utils/StringManipulation"


interface Props{
  id: string | number
}

export default function RoleViewPage({
  id
}: Props) {
  const { data, setToggleModal } = useRoleStore()

  return (
    <main className="pt-20 pb-24">
                <section className="container__primary">
                    <Title name='View Role' css='border-b pb-2 mb-3 border-gray-300' />
    
                    <div className='flex items-center justify-end mb-2'>
                        <Button 
                            name='Edit' 
                            onClick={() => setToggleModal(true)} 
                        />
                    </div>
                    
                    <div className='w-full bg-white drop-shadow-lg rounded-xl px-6 py-6 space-y-4'>
                        
                        <AdminRecord 
                            label='Name' 
                            value={valueWithFallback(data.name)} 
                        />
                       
                        <AdminRecord 
                            label='Level' 
                            value={valueWithFallback(data.level)} 
                        />
                       
                        <AdminRecord 
                            label='User' 
                            value={valueWithFallback(data.userId)} 
                        />
    
                    </div>
                </section>
            </main>
  )
}
