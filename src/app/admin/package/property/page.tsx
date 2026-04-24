import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import PropertyPage from './_components/PropertyPage'
import PropertyAddModal from './_components/PropertyAddModal'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Package Dashboard', href: '/admin/package'},
    {id: 4, name: 'Properties', href: '/admin/package/property'},
]


export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <PropertyPage />

        <PropertyAddModal />
    </>
  )
}
