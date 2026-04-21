"use client"
import Title from '../../_components/titles/Title'
import TitleTwo from '../../_components/titles/TitleTwo'
import { NoImage } from '@/_data/sample/NoImage'
import { CountryData } from '../../_data/sample/CountryData'
import CardVisa from '../../_components/cards/CardVisa'
import ButtonPaginate from '../../_components/buttons/ButtonPaginate'



export default function VisaPage() {
  return (
    <>
        <section className='w-full pt-20'>
            <div className='container__primary border-b border-gray-200 pb-4'>
                <Title name='Visa Processing' css='mb-2' />
                <p className='font-light text-lg lg:w-[60%]'>
                    This is not a government website. We are an independent visa support service, offering professional 
                    assistance to simplify, expedite, and streamline visa applications. You may also apply directly 
                    through the official government portal without any service fees.
                </p>
            </div>
        </section>

        <section className='w-full pt-8 pb-24'>
            <div className='container__primary'>
                <TitleTwo name='Visa By Country' css='mb-3 text-gray-700' />
                <section className='grid lg:grid-cols-4 grid-cols-2 gap-8'>
                    { CountryData.slice(0, 12).map((i, key) => (
                        <CardVisa 
                            key={key} 
                            image={i.image} 
                            name={i.name} 
                            href={`#`} 
                        />
                    )) }
                </section>
                <div className='flex items-center justify-end gap-4 mt-8'>
                    <ButtonPaginate name='Prev' />
                    <ButtonPaginate name='Next' />
                </div>
            </div>
        </section>
    </>
  )
}
