"use client"
import Title from '@/app/(main)/_components/titles/Title'
import AdminRecord from '../../_components/records/AdminRecord'
import { useAppInfoStore } from '../_data/store/useAppInfoStore'
import { valueWithFallback } from '@/_utils/StringManipulation'
import Button from '@/app/(main)/_components/buttons/Button'


export default function AppInfoPage() {
    const { 
        data, 
        setToggleModal, 
    } = useAppInfoStore()

  

  return (
    <>
        <main className="pt-20 pb-24">
            <section className="container__primary">
                <Title name='App Information' css='border-b pb-2 mb-3 border-gray-300' />

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
                        label='Email' 
                        value={valueWithFallback(data.email)} 
                    />
                    <AdminRecord 
                        label='Phone Number' 
                        value={valueWithFallback(data.phone)} 
                    />
                    <AdminRecord 
                        label='Email' 
                        value={valueWithFallback(data.email)} 
                    />
                    <AdminRecord label='Website' value={valueWithFallback(data.website)} />
                    <AdminRecord label='LinkedIn' value={valueWithFallback(data.linkedin)} />
                    <AdminRecord label='Twitter' value={valueWithFallback(data.twitter)} />
                    <AdminRecord label='WhatsApp' value={valueWithFallback(data.whatsapp)} />
                    <AdminRecord label='Instagram' value={valueWithFallback(data.instagram)} />
                    <AdminRecord label='Facebook' value={valueWithFallback(data.facebook)} />

                </div>
            </section>
        </main>
    </>
  )
}
