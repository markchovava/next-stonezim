import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import UserPage from './_components/UserPage'
import UserAddModal from './_components/UserAddModal'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Settings', href: '/admin/settings'},
    {id: 4, name: 'Users', href: '/admin/user'},
]

export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <UserPage />

        <UserAddModal />
    </>
  )
}
