import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import PropertyViewPage from "./_components/PropertyViewPage"
import PropertyEditModal from "./_components/PropertyEditModal"




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Package Dashboard', href: '/admin/package'},
    {id: 4, name: 'Properties', href: '/admin/package/property'},
    
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
        {id: 5, name: 'View Property', href: '/admin/package/property/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <PropertyViewPage id={id} />
        <PropertyEditModal id={id} />
    </>
  )
}
