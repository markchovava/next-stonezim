"use client"
import Logo from '../logos/Logo'
import BackToTopButton from '../buttons/BackToTopButton'
import Link from 'next/link'
import { useNavStore } from '../../_store/useNavStore'
import { FooterData, SocialData } from '../../_data/sample/MainNavData'
import IconDefault from '@/_components/icons/IconDefault'
import { NavData, OtherNavData } from '../../_data/sample/NavData'

export default function Footer() {
    const { navList } = useNavStore()
  return (
    <>
        <BackToTopButton />
        <footer className=' bg-slate-950 text-white pt-12 pb-8'>
            <section className='container__primary grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
                <div className='py-6 px-4 rounded-xl'>
                    <Logo />
                    <h6 className='font-medium text-lg mt-6 mb-3'>
                        Social Media Links
                    </h6>
                    <ul className='text-gray-100 flex items-center justify-start gap-2'>
                        {SocialData.map((i, key) => (
                            <Link key={key} href={i.href}>
                            <li>
                            <IconDefault
                                css='text-2xl hover:scale-110 ease-initial duration-200' 
                                type={i.name} />
                            </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className=' py-6 px-4 rounded-xl'>
                    <h6 className='font-medium text-lg mb-6'>
                        Company Links
                    </h6>
                    <ul className='text-gray-100 flex text-sm items-start justify-center flex-col space-y-3'>
                        {NavData.map((i, key) => (
                            <FooterLinkItem 
                                key={key} 
                                href={i.href} 
                                name={i.name} />
                        ))}
                    </ul>
                </div>
                <div className='py-6 px-4 rounded-xl'>
                    <h6 className='font-medium text-lg mb-6'>
                        Important Links
                    </h6>
                    <ul className='text-gray-100 flex text-sm items-start justify-center flex-col space-y-3'>
                        {OtherNavData.map((i, key) => (
                            <FooterLinkItem 
                                key={key} 
                                href={i.href} 
                                name={i.name} />
                        ))}
                    </ul>
                </div>
            </section>

            <section className='container__primary pb-12 mx-auto border-t border-slate-700 pt-2'>
                <p className='text-end text-sm text-gray-300 font-light'> 
                    &copy; {new Date().getFullYear()} Developed and Maintained by FLDesigners.
                </p>
            </section>

        </footer>
    </>
  )
}



interface pInterface{
    href: string
    name: string
}

function FooterLinkItem({
    name,
    href,
}: pInterface){

    return (
        <Link href={href}>
            <li className={`ease-in-out duration-200 border-b-2 border-transparent hover:text-amber-200 
                hover:border-b-2 hover:border-amber-200`}>
                {name}
            </li>
        </Link>
    )
}
