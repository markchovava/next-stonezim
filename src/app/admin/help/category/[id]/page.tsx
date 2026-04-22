import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import CategoryViewPage from "./_components/CategoryViewPage"
import CategoryEditModal from "./_components/CategoryEditModal"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Help', href: '/admin/help'},
    {id: 4, name: 'Categories', href: '/admin/help/category'},
    
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
        {id: 5, name: 'View Category', href: '/admin/help/category/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <CategoryViewPage id={id} />
        <CategoryEditModal id={id} />
    </>
  )
}
