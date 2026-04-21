import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "../_components/headers/HeaderTwo"
import VisaPage from "./_components/VisaPage"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Visa', href: '/visa'},
]


export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <VisaPage />
    </>
  )
}
