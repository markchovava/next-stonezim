import HeaderTwoResponsive from './HeaderTwoResponsive'
import NavTwo from '../navs/NavTwo'

export default function HeaderTwo() {
  return (
    <>
    <header className='lg:block hidden w-full h-35 relative bg-white text-blue-900 drop-shadow'>   
        <NavTwo />
    </header>

    <HeaderTwoResponsive />
    </>
  )
}
