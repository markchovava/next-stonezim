import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "../_components/headers/HeaderTwo"
import PackagePage from "./_components/PackagePage"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Our Packages', href: '/package'},
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
