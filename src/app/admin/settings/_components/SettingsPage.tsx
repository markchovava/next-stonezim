"use cleint"
import Title from '@/app/(main)/_components/titles/Title'
import { SettingsNavData } from '../_data/sample/SettingsData'
import AdminCard from '../../_components/cards/AdminCard'



export default function SettingsPage() {
  return (
    <>
    <main className="pt-20 pb-24">
        <section className="container__primary">
          <Title name='Settings' />

           <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                {SettingsNavData.map((i, key) => (
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
