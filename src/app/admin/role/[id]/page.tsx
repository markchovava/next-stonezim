import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import RolePage from "../_components/RolePage"
import RoleEditModal from "./_components/RoleEditModal"
import RoleViewPage from "./_components/RoleViewPage"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Settings', href: '/admin/settings'},
    {id: 3, name: 'Roles', href: '/admin/role'},
    
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
        {id: 4, name: 'View Role', href: '/admin/settings/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <RoleViewPage id={id} />
        <RoleEditModal id={id} />
    </>
  )
}
