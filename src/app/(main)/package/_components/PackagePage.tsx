"use client"

import Button from "../../_components/buttons/Button"
import TextInputTwo from "../../_components/forms/inputs/TextInputTwo"
import TitleTwo from "../../_components/titles/TitleTwo"
import { usePackageStore } from "../_data/store/usePackageStore"
import TravellerInput from "../../_components/forms/inputs/TravellerInput"
import IconDefault from "@/_components/icons/IconDefault"
import Link from "next/link"
import { NoImage } from "@/_data/sample/NoImage"
import { PackageData } from "../_data/sample/PackageData"
import CardPackage from "../../_components/cards/CardPackage"
import ButtonPaginate from "../../_components/buttons/ButtonPaginate"



export default function PackagePage() {

  return (
    <>
    <section className='w-full pt-24 pb-12'>
      <SearchForm />
    </section>

    <section className="w-full pb-24">
      <div className="container__primary ">
        <TitleTwo name="Our Packages" css="text-gray-800" />
        <hr className="border-b border-gray-200 mb-5 mt-4" />

        <section className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
           
           {PackageData.slice(0, 12).map((i, key) => (
            <CardPackage 
                image={i.image}
                name={i.name}
                href={i.slug}
                city={i.city}
                price={i.price}
                accommodation={i.accommodation}
                airline={i.airline}
                duration={i.duration}
                route={i.route}
                transport={i.transport}
            />
           ))}

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


function SearchForm(){
  const { 
    data, 
    errors, 
    setInputValue, 
    setIsSubmitting 
  } = usePackageStore()
  return(
    <div className='container__primary border border-gray-200 rounded-2xl pt-8 pb-10'>
          <form className='flex flex-col items-center justify-center'>
              <TitleTwo name='Search a Package' />
              <hr className='border-b border-gray-200 w-[20%] mt-3 mb-6' />
              {/* INPUT */}
              <div className='w-[90%] md:w-[90%] grid lg:grid-cols-10 grid-cols-1 gap-3 mb-4'>
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
                    <TravellerInput />
                  </div>

              </div>
              {/* SUBMIT */}
              <div className='flex items-center justify-center'>
                  <Button type='submit' name='Search' css='px-12 py-3' />
              </div>
          </form>
      </div>
  )
}
