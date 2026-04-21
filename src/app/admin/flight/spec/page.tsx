import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import PageMetaPage from './_components/SpecPage'
import PageMetaAddModal from './_components/SpecAddModal'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Flight Dashboard', href: '/admin/flight'},
    {id: 4, name: 'Cabin Specifications', href: '/admin/flight/spec'},
]

export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <PageMetaPage />

        <PageMetaAddModal />
    </>
  )
}
