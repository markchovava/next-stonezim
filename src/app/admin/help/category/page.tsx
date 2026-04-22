import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import RoleAddModal from './_components/CategoryAddModal'
import CategoryPage from './_components/CategoryPage'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Help', href: '/admin/help'},
    {id: 4, name: 'Categories', href: '/admin/help/category'},
]

export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <CategoryPage />

        <RoleAddModal />
    </>
  )
}
