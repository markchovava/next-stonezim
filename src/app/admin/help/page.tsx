import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import HelpPage from "./_components/HelpPage"




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Help', href: '/admin/help'},
]

export default function page() {
  return (
    <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <HelpPage />
    </>
  )
}
