"use client"


import Title from '@/app/(main)/_components/titles/Title'


const title = "Packages"

export default function PackageAdminPage() {
  return (
    <main className="pt-20 pb-24">
        <section className="container__primary">
            <Title 
                name={title}
                css='border-b pb-2 mb-3 border-gray-300' 
            />
        </section>
    </main>
  )
} 
