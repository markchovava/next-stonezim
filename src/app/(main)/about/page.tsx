
import { PageMetaInterface } from '../_data/entity/PageMetaEntity'
import AboutMainSection from './_components/AboutMainSection'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import Spacer from '@/_components/spacers/Spacer'
import ContactSection from '../_components/sections/ContactSection'
import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import { AppInfoData } from '../_data/sample/AppInfoData'
import BannerPrimary from '../_components/banner/BannerPrimary'



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}

/* const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('about-us');

  if (!pageMeta?.data) {
    return {
      title: 'Celeste Energy - About Us',
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
    {id: 2, name: 'About Us', href: '/about'},
]


export default async function page() {


  return (
    <div className='bg-white'>
      <BannerPrimary 
          image={AppInfoData.about.image}
          title={AppInfoData.about.title}
          details={AppInfoData.about.subtitle}
      />
      <BreadCrumb data={CrumbsData} />
      

      <AboutMainSection />
    
    
      <div className="bg-gray-100">
          <FadeSlideIn slideDirection="up" duration={1500}>
              <Spacer />
              <ContactSection />
          </FadeSlideIn>
      </div>

    </div>
  )
}
