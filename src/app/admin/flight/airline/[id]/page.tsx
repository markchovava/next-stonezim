import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import AirlineViewPage from "./_components/PageMetaViewPage"
import AirlineEditModal from "./_components/AirlineEditModal"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Flight Dashboard', href: '/admin/flight'},
    {id: 3, name: 'Airlines', href: '/admin/flight/airline'},
    
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
        {id: 4, name: 'View Airline', href: '/admin/flight/airline/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <AirlineViewPage id={id} />
        <AirlineEditModal id={id} />
    </>
  ) 
}
