"use client"
import TitleTwo from '../titles/TitleTwo'
import Link from 'next/link'
import Button from '../buttons/Button'
import Image from '../images/Image'
import { ReactNode } from 'react'

interface PropInterface {
    title?: string
    direction?: 'right' | 'left'
    details: ReactNode
    btnTitle?: string
    href?: string
    image?: string
}



export default function DualSection3({
    title,
    direction = 'left',
    details,
    btnTitle,
    href,
    image,
}: PropInterface) {

    const isRight = direction === 'right';

    return (
        <div className="container__primary min-h-150 md:min-h-fit relative bg-blue-950 rounded-2xl overflow-hidden drop-shadow flex flex-col md:flex-row">
            
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 w-full h-full">
                {image && <Image image={image} />}
                {/* Visual Fix: Fade the bottom so the card transition is smoother */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:hidden" />
            </div>

            {/* Content Overlay */}
            <div className={`
                relative z-10 w-full h-full flex flex-col 
                justify-end md:justify-center
                ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}
            `}>
                
                {/* Spacer (Hidden on mobile) */}
                <div className="hidden md:block md:w-[60%]" />

                {/* Text Card Side */}
                <div className="w-full md:w-[40%] px-6 py-10 md:px-10 md:py-12">
                    <div className="w-full rounded-2xl bg-white p-8 shadow-2xl">
                        {title && (
                            <TitleTwo 
                                name={title} 
                                css="text-slate-900 mb-3" 
                            />
                        )}
                        
                        <div className="text-lg font-light mb-5 text-slate-700">
                            {details}
                        </div>

                        {href && btnTitle && (
                            <Link href={href}>
                                <Button name={btnTitle} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}