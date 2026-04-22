import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import PackagePage from "./_components/PackagePage"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Package Dashboard', href: '/admin/package'},
]

export default function page() {
  return (
    <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <PackagePage />
    </>
  )
}
