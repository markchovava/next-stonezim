"use client"
import { useNavStore } from '../../_store/useNavStore'
import HeroBanner from '../banner/BannerHero'
import Nav from '../navs/Nav'
import HeaderResponsive from './HeaderResponsive'



export default function Header() {
  const { isHome } = useNavStore()

  return (
    <>
      
      <header className='lg:block hidden w-full h-[98vh] relative'>
        <section className='w-full h-full absolute z-10'>
            <HeroBanner />
        </section>
        <Nav />
      </header>
      
      <HeaderResponsive />
    </>
  )
}



