import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import PageMetaPage from './_components/MessagePage'
import PageMetaAddModal from './_components/MessageAddModal'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Messages', href: '/admin/message'},
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
