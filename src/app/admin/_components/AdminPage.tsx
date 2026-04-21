"use client"

import Title from "@/app/(main)/_components/titles/Title"
import { AdminNavData } from "../_data/sample/AdminData"
import AdminCard from "./cards/AdminCard"


const title = 'Admin Dashboard'


export default function AdminPage() {
  return (
    <>
    <main className="pt-20 pb-24">
    <section className="container__primary">
      
      <Title 
        name={title} 
        css='border-b pb-2 mb-3 border-gray-300' 
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {AdminNavData.map((i, key) => (
          <AdminCard 
            key={key}
            href={i.href}
            css={i.css}
            icon={i.icon}
            name={i.name}
          />
        ))}
      </div>

    </section>

    </main>
    </>
  )
}



