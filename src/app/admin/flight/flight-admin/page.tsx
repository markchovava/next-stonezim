import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '@/app/(main)/_components/headers/HeaderTwo'
import FlightAdminPage from './_components/FlightAdminPage'
import FlightAdminAddModal from './_components/FlightAdminAddModal'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Flight Dashboard', href: '/admin/flight'},
    {id: 4, name: 'Flights', href: '/admin/flight/flight-admin'},
]

export default function page() {
  return (
    <>
        <HeaderTwo />
        <BreadCrumb data={CrumbsData} />
        <FlightAdminPage />

        <FlightAdminAddModal />
    </>
  )
}
