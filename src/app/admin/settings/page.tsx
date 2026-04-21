import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import SettingsPage from "./_components/SettingsPage"





const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 2, name: 'Settings', href: '/admin/settings'},
]

export default function page() {
  return (
    <>
   
    <HeaderTwo />
    <BreadCrumb data={CrumbsData} />
    <SettingsPage />
       
    </>
  )
}
