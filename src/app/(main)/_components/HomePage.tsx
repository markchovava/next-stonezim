"use client"

import FadeSlideIn from "./effects/FadeSlideIn"
import Carousel from "./carousels/Carousel"
import Title from "./titles/Title"
import { GuideData } from "../_data/sample/GuideData"
import GuideSection from "./sections/GuideSection"
import DualSection2 from "./sections/DualSection2"
import { VisaData } from "../_data/sample/VisaData"
import DualSection3 from "./sections/DualSection3"
import { CityData } from "../_data/sample/CityData"
import { PackageInfoData } from "../package/_data/sample/PackageData"
import { useAppInfoStore } from "@/app/admin/app-info/_data/store/useAppInfoStore"




export default function HomePages() {
    const { 
        setData: setAppInfoData
    } = useAppInfoStore()


   /*  useEffect(() => {
        appInfoData && setAppInfoData(appInfoData)
    }, [setAppInfoData,]) */


  return (
    <>

        <section className="w-full bg-gray-50 py-26">
            <FadeSlideIn slideDirection="up" duration={1500}>
                <div className="container__primary">
                    <Title 
                        name="Places to be" 
                        btnName="View More" 
                        href="#" 
                    />
                    <Carousel data={CityData} />
                </div>
            </FadeSlideIn>
        </section>

     <section className="w-full py-26 bg-white">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <GuideSection 
                title={'Things to do.'}
                href={`#`}
                data={GuideData}
            />
        </FadeSlideIn>
     </section>

    <section className="bg-gray-100 py-26">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <DualSection2 
                title={PackageInfoData.title}
                direction={`left`}
                details={PackageInfoData.details}
                btnTitle={`Learn More`}
                href={`#`}
                image={PackageInfoData.image}
            />
        </FadeSlideIn>
    </section>
 
    <section className="bg-gray-50 py-26">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <DualSection3 
                title={VisaData.title}
                direction={`right`}
                details={VisaData.details}
                btnTitle={`Learn More`}
                href={`#`}
                image={VisaData.image}
            />
        </FadeSlideIn>
    </section>



    </>
  )
}
