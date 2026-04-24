"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import Title from "@/app/(main)/_components/titles/Title"
import { usePropertyStore } from "../../_data/store/usePropertyStore"



const title = 'View Property'


interface Props{
  id: string | number
}

export default function PropertyAdminViewPage({ 
  id 
}: Props) {
    const { setToggleModal } = usePropertyStore()
    
  return (
    <>
     <main className="pt-20 pb-24">
          <section className="container__primary">
              <Title 
                  name={title} 
                  css='border-b pb-2 mb-3 border-gray-300' />
              <div className='flex items-center justify-end mb-2'>
                  <Button
                      name='Edit' 
                      onClick={() => setToggleModal(true)} 
                  />
              </div>
          </section>
      </main>
    </>
  )
}
