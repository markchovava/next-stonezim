import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import PageMetaViewPage from "./_components/PageMetaViewPage"
import PageMetaEditModal from "./_components/PageMetaEditModal"




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Settings', href: '/admin/settings'},
    {id: 3, name: 'Page Meta', href: '/admin/page-meta'},
    
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
        {id: 4, name: 'View Page Meta', href: '/admin/settings/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <PageMetaViewPage id={id} />
        <PageMetaEditModal id={id} />
    </>
  )
}
