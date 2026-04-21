import ContactSection from '../_components/sections/ContactSection'
import { PageMetaInterface } from '../_data/entity/PageMetaEntity'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderTwo from '../_components/headers/HeaderTwo'
import Title from '../_components/titles/Title'



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}

/* const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('contact-us');

  if (!pageMeta?.data) {
    return {
      title: 'Contact Us',
      description: '',
    };
  }

  const { title, description, keywords } = pageMeta.data;
  let parsedKeywords: string[] = [];
  try {
    parsedKeywords = JSON.parse(keywords);
  } catch {
    parsedKeywords = [];
  }

  return {
    title,
    description,
    keywords: parsedKeywords,
    openGraph: {
      title,
      description,
    },
  };
} */

const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Contact Us', href: '/contact'},
]

export default async function page() {
  

 
  
  return (
    <>
    <HeaderTwo />

    {/* <BannerPrimary
        title={ContactData.title}
        image={ContactData.image}
        details={ContactData.subtitle} 
    /> */}
    <BreadCrumb data={CrumbsData} />
    <section className='w-full pt-20 mb-8'>
        <div className='container__primary border-b border-gray-200 pb-4'>
            <Title name='Contact Us' css='mb-2' />
            <p className='font-light text-lg w-[60%]'>
                Talk to us.
            </p>
        </div>
    </section>

    <div className="bg-white">
        <FadeSlideIn slideDirection="up" duration={1500}>
            
            <ContactSection withMap={true} />
        </FadeSlideIn>
    </div>


    </>
  )
}
