
import FadeSlideIn from "./_components/effects/FadeSlideIn";
import Spacer from "@/_components/spacers/Spacer";
import { PageMetaInterface } from "./_data/entity/PageMetaEntity";
import { getAppInfo } from "./_data/actions/AppInfoActions";
import HomeMainSection from "./_components/HomePage";
import ContactSection from "./_components/sections/ContactSection";
import Header from "./_components/headers/Header";



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}



/* const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('home');

  if (!pageMeta?.data) {
    return {
      title: 'FambaNow - Home',
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


export default async function Home() {
 /*  const [
    appInfoData
  ] = await Promise.all([
      getAppInfo()
  ]) */

  return (
    <>
      <Header />
      <div className='bg-gray-50'>
        <HomeMainSection />
        <div className="bg-gray-100">
            <FadeSlideIn slideDirection="up" duration={1500}>
                <Spacer />
                <ContactSection withMap={true} />
            </FadeSlideIn>
        </div>
      </div>
    </>

  );
}
