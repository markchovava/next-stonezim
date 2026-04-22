"use client"
import IconDefault from '@/_components/icons/IconDefault'
import { AppInfoData } from '../../_data/sample/AppInfoData'
import { SocialData } from '../../_data/sample/MainNavData'
import Link from 'next/link'

export default function NavTop() {
  return (
     <section className="relative w-full h-10 overflow-hidden">
        {/* Overlay: Using inset-0 is shorthand for top-0 right-0 bottom-0 left-0 */}
        <div className="absolute inset-0 bg-green-950 opacity-70 z-10"></div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container__primary w-full flex items-center justify-between gap-8 font-light text-xs sm:text-sm px-4">
            
            {/* Phone Info */}
            <p className="flex items-center gap-3">
                <IconDefault type="phone" css="w-4 h-4" />
                <span>{AppInfoData.phone}</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
                {SocialData.map((i, index) => (
                <Link
                    key={index} 
                    href={i.href}
                    className="hover:scale-110">
                    <IconDefault type={i.name} css="w-4 h-4" />
                </Link>
                ))}
            </div>
            </div>
        </div>
    </section>
  )
}
