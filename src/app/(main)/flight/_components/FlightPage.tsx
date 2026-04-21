"use client"
import TitleTwo from '../../_components/titles/TitleTwo'
import { useFlightStore } from '../_data/store/useFlightStore'
import Button from '../../_components/buttons/Button'
import TextInputTwo from '../../_components/forms/inputs/TextInputTwo'
import FadeSlideIn from '../../_components/effects/FadeSlideIn'
import Title from '../../_components/titles/Title'
import Carousel from '../../_components/carousels/Carousel'
import { CityData } from '../../_data/sample/CityData'
import TitleThree from '../../_components/titles/TitleThree'
import { AirlineData, FlightData } from '../_data/sample/FlightData'
import FlightAside from './FlightAside'
import CardFlight from '../../_components/cards/CardFlight'
import IconDefault from '@/_components/icons/IconDefault'
import ButtonPaginate from '../../_components/buttons/ButtonPaginate'
import { SortData } from '../../_data/sample/SortData'



export default function FlightPage() {
    const { data, errors, setInputValue, setIsSubmitting } = useFlightStore()
  return (
    <>
    <section className='w-full py-26'>
        {/* Added pb-10 to provide space at the bottom */}
        <div className='container__primary border border-gray-200 rounded-2xl pt-8 pb-10 mb-8'>
            <form className='flex flex-col items-center justify-center'>
                <TitleTwo name='Book Your Flight' />
                <hr className='border-b border-gray-200 w-[20%] mt-3 mb-6' />
                {/* INPUT */}
                <div className='w-[90%] md:w-[80%] grid lg:grid-cols-10 grid-cols-1 gap-3 mb-4'>
                    {/* From Field */}
                    <div className='col-span-1 lg:col-span-3'>
                       <TextInputTwo
                            label='Departing City'
                            iconType='location'
                            type='text'
                            placeholder='Enter Departing City'
                            name='from'
                            value={data.from}
                            onChange={setInputValue}
                            error={errors.from}
                        />
                    </div>
                    {/* From Field */}
                    <div className='col-span-1 lg:col-span-3'>
                       <TextInputTwo
                            label='Arriving City'
                            iconType='location'
                            type='text'
                            placeholder='Enter Arriving City'
                            name='to'
                            value={data.to}
                            onChange={setInputValue}
                            error={data.to}
                        />
                    </div>

                    {/* From Field */}
                    <div className='col-span-1 lg:col-span-2'>
                       <TextInputTwo
                            label='Departing Date'
                            iconType='calendar'
                            type='date'
                            placeholder='Enter Departing Date'
                            name='to'
                            value={data.departingDate}
                            onChange={setInputValue}
                            error={errors.departingDate}
                        />
                    </div>

                    {/* From Field */}
                    <div className='col-span-1 lg:col-span-2'>
                       <TextInputTwo
                            label='Returning Date'
                            iconType='calendar'
                            type='date'
                            placeholder='Enter Returning Date'
                            name='returningDate'
                            value={data.returningDate}
                            onChange={setInputValue}
                            error={errors.returningDate}
                        />
                    </div>

                </div>
                {/* SUBMIT */}
                <div className='flex items-center justify-center'>
                    <Button type='submit' name='Search' css='px-12 py-3' />
                </div>
            </form>
        </div>
       

        <section className='container__primary grid lg:grid-cols-4 grid-cols-1 gap-6 mb-16'>
            {/* Main Content: Top on mobile, Right (col 2-4) on desktop */}
            <div className='lg:col-span-3 col-span-1 order-1 lg:order-2'>
                <MainArea />
            </div>

            {/* Sidebar: Bottom on mobile, Left (col 1) on desktop */}
            <div className='col-span-1 order-2 lg:order-1'>
                <FlightAside />
            </div>
        </section>

        <section className="w-full pt-10 pb-16">
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
        
    </section>
    </>
  )
}




function MainArea(){
    return(
        <>
        <div className='bg-gray-100 w-full flex items-center justify-between px-4 py-2'>
            <p className='font-light text-lg'>Showing Results 20 of 100</p>
            <select className='border border-gray-400 px-3 py-2 outline-none'>
                <option>Select Sort By</option>
                {SortData.map((i, key) => (
                    <option key={key} value={i.value}>{i.name}</option>
                ))}
            </select>
        </div>
        <div className='pt-2 mb-4'>
            <p className='text-gray-600 font-medium text-xs'>
                The time written here are estimates.
            </p>
            <p className='text-gray-600 font-medium text-xs'>
                Prices may change based on availability and are not final until you complete your purchase.
            </p>
        </div>
        <hr className='border-b border-gray-200 mb-6' />
        <div className='space-y-6'>
            {FlightData && FlightData.slice(0,10).map((i, key) => (
                <CardFlight 
                    key={key}
                    id={i.id}
                    airline={i.airline}
                    departingTime={i.departingTime}
                    arrivingTime={i.arrivingTime}
                    from={i.from}
                    to={i.to}
                    duration={i.duration}
                    stops={i.stops}
                    price={i.price}
                />
            ))}

            <div className='flex items-center justify-end gap-4'>
                <ButtonPaginate name='Prev' />
                <ButtonPaginate name='Next' />
            </div>
        </div>
        </>
    )
}




