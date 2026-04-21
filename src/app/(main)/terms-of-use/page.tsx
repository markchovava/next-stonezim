
import FooterDefault from '../_components/footers/FooterDefault'
import { PageMetaInterface } from '../_data/entity/PageMetaEntity';



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}
/* 
const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('terms-of-use');

  if (!pageMeta?.data) {
    return {
      title: 'Term Of Use',
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
}
 */
export default function page() {
    const headerImage = '/assets/img/banner/service.jpg'
  return (
    <>
    

     <section className='flex items-center justify-center py-20'>
        <h1 className='text-[4rem]'>Coming soon</h1>
     </section>

     <FooterDefault />
    </>
  )
}
