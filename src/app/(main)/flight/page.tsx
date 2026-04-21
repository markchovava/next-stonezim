import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "../_components/headers/HeaderTwo"
import FlightPage from "./_components/FlightPage"


const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Flights', href: '/flight'},
]


export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <FlightPage />
    </>
  )
}
