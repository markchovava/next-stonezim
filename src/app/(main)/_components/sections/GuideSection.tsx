"use client"

import Link from "next/link"
import ButtonSecondary from "../buttons/ButtonSecondary"
import CardGuide from "../cards/CardGuide"
import CardGuide2 from "../cards/CardGuide2"
import Title from "../titles/Title"



interface PropInterface{
    title: string
    href: string
    data: any[]
}

export default function GuideSection({
    title,
    href,
    data
}: PropInterface) {
  return (
    <div className="container__primary">
        <Title 
            name={title} 
            btnName="View More" 
            href="#" 
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-8">
            {/* Left card — needs explicit height so the absolute child has something to fill */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden h-100">
                <CardGuide 
                    href={data[0].href}
                    name={data[0].name}
                    image={data[0].image}
                    labels={data[0].categories}
                />
            </div>

            {/* Right column */}
            <div className="lg:col-span-3 lg:space-y-3 space-y-5 py-2">
                {/*  */}
                {data.slice(1, 4).map((i, key) => (
                    <CardGuide2
                        key={key}
                        href={i.href}
                        name={i.name}
                        image={i.image}
                        labels={i.categories}
                    />
                ))}
                
            </div>
        </div>
    </div> 
  )
}
