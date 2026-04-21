import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import HelpAdminViewPage from "./_components/HelpAdminViewPage"
import HelpAdminEditModal from "./_components/HelpAdminEditModal"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Help Admin', href: '/admin/help/help-admin'},
    
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
        {id: 4, name: 'View HelpAdmin', href: '/admin/help/help-admin/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <HelpAdminViewPage id={id} />
        <HelpAdminEditModal id={id} />
    </>
  ) 
}
