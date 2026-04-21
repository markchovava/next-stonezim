import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import PageMetaPage from './_components/PageMetaPage'
import PageMetaAddModal from './_components/PageMetaAddModal'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Settings', href: '/admin/settings'},
    {id: 4, name: 'Page Meta', href: '/admin/page-meta'},
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
