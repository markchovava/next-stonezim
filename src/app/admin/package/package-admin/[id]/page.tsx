import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import PackageAdminViewPage from "./_components/PackageAdminViewPage"
import PackageAdminEditModal from "./_components/PackageAdminEditModal"




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Packaage Dashboard', href: '/admin/help'},
    {id: 4, name: 'Packages', href: '/admin/package/package-admin'},
    
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
        {id: 5, name: 'View Package', href: '/admin/package/package-admin/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <PackageAdminViewPage id={id} />
        <PackageAdminEditModal id={id} />
    </>
  )
}
