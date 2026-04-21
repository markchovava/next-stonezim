"use client"
import TitleTwo from '../titles/TitleTwo'
import Link from 'next/link'
import Button from '../buttons/Button'
import { NoImage } from '@/_data/sample/NoImage'
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

export default function DualSection2({
    title,
    direction = 'left', // Default to left
    details,
    btnTitle,
    href,
    image,
}: PropInterface) {
    
    // Determine if we need to reverse the row layout for 'right' alignment
    const isRight = direction === 'right';

    return (
        <div className={`
            container__primary flex flex-col min-h-fit
            ${isRight ? 'md:flex-row-reverse bg-gray-600' : 'md:flex-row bg-slate-900'} 
            items-stretch justify-start rounded-2xl overflow-hidden drop-shadow
        `}>
            
            {/* Content Side */}
            <div className="w-full md:w-[60%] px-6 py-10 md:px-8 md:py-12 text-gray-50 flex flex-col justify-center">
                {title && <TitleTwo name={title} css="text-gray-50 mb-3 text-2xl md:text-3xl" />}
                
                <div className="text-base md:text-lg font-light mb-5">
                    {details}
                </div>

                {href && btnTitle && (
                    <Link href={href} className="w-fit">
                        <Button name={btnTitle} />
                    </Link>
                )}
            </div>

            {/* Image Side */}
            <div className="w-full md:w-[40%] p-8 md:py-12 md:px-12 flex flex-col"> 
                <div className="aspect-5/4 md:flex-1 w-full rounded-2xl overflow-hidden bg-white">
                    <Image image={image ?? NoImage} />
                </div>
            </div>

        </div>
    )
}