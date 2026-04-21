import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import FlightAdminViewPage from "./_components/FlightAdminViewPage"
import FlightAdminEditModal from "./_components/FlightAdminEditModal"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Flight Dashboard', href: '/admin/flight/flight-admin'},
]

interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}
 
export default async function page({ params }: PropInterface) {
    const { id } = await params;
    const CrumbList = [
        ...CrumbsData, 
        {id: 4, name: 'View Flight', href: '/admin/flight/flight-admin/${id}'},
    ]

  return (
      <> 
          <HeaderTwo />
          <BreadCrumb data={CrumbList} />
          <FlightAdminViewPage id={id} />
          <FlightAdminEditModal id={id} />
      </>
  )
}
