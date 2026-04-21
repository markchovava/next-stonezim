import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import RolePage from './_components/RolePage'
import RoleAddModal from './_components/RoleAddModal'


const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Settings', href: '/admin/settings'},
    {id: 4, name: 'Role', href: '/admin/role'},
]

export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <RolePage />

        <RoleAddModal />
    </>
  )
}
