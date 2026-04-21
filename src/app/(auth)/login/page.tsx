import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import LoginPage from "./_components/LoginPage"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Login', href: '/login'},
]

export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <LoginPage />
    </>
  )
}
