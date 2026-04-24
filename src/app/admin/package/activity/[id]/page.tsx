import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import ActivityViewPage from "./_components/ActivityViewPage"
import ActivityEditModal from "./_components/ActivityEditModal"




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Package Dashboard', href: '/admin/package'},
    {id: 4, name: 'Activities', href: '/admin/package/activity'},  
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
        {id: 5, name: 'View Activity', href: '/admin/package/activity/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <ActivityViewPage id={id} />
        <ActivityEditModal id={id} />
    </>
  )
}
