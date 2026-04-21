import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "../(main)/_components/headers/HeaderTwo"
import AdminPage from "./_components/AdminPage"




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
]

export default function page() {
  return (
    <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <AdminPage />
    </>
  )
}
