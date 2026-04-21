"use client"

import Title from "@/app/(main)/_components/titles/Title"
import { AdminNavData } from "../_data/sample/AdminData"
import AdminCard from "./cards/AdminCard"

export default function AdminPage() {
  return (
    <>
    <main className="pt-20 pb-24">
    <section className="container__primary">
      <Title name='Dashboard' />

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



