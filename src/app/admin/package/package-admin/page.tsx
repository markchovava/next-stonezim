import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import PackageAdminPage from './_components/PackageAdminPage'
import PackageAdminAddModal from './_components/PackageAdminAddModal'




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Package Dashboard', href: '/admin/package'},
    {id: 4, name: 'Packages', href: '/admin/package/package-admin'},
]

export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <PackageAdminPage />

        <PackageAdminAddModal />
    </>
  )
}
