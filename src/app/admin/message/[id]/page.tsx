import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import HeaderTwo from "@/app/(main)/_components/headers/HeaderTwo"
import MessageViewPage from "./_components/MessageViewPage"
import MessageEditModal from "./_components/MessageEditModal"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Messages', href: '/admin/message'},
    
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
        {id: 4, name: 'View Message', href: '/admin/message/${id}'},
    ]

  return (
     <> 
        <HeaderTwo />
        <BreadCrumb data={CrumbList} />
        <MessageViewPage id={id} />
        <MessageEditModal id={id} />
    </>
  ) 
}
