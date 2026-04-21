import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import AppInfoPage from "./_components/AppInfoPage"
import AppInfoEditModal from "./_components/AppInfoModal"


const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Settings', href: '/admin/settings'},
    {id: 4, name: 'App Information', href: '/admin/settings/app-info'},
]

export default function page() {
  return (
    <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <AppInfoPage />
        <AppInfoEditModal />
    </>
  )
}
