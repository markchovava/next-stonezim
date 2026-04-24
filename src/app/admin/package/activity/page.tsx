import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import CityPage from './_components/ActivityPage'
import CityAddModal from './_components/ActivityAddModal'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Package Dashboard', href: '/admin/package'},
    {id: 4, name: 'Cities', href: '/admin/package/city'},
]


export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <CityPage />

        <CityAddModal />
    </>
  )
}
