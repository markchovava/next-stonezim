"use client"

import React, { useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Title from '@/app/(main)/_components/titles/Title';
import TextInput from '@/app/(main)/_components/forms/inputs/TextInput';
import Button from '@/app/(main)/_components/buttons/Button';
import { useFlightStore } from '../_data/store/useFlightStore';
import SelectInput from '@/app/(main)/_components/forms/selects/SelectInput';
import ButtonAdminClose from '@/app/admin/_components/buttons/ButtonAdminClose';
import { CityData } from '@/app/(main)/_data/sample/CityData';
import { AirlineData } from '@/app/(main)/flight/_data/sample/FlightData';




const title = "Add Flight"

const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
}

export default function FlightAddModal() {
    const { 
        data, 
        errors,
        toggleModal,
        isSubmitting,
        resetData,
        setInputValue, 
        setToggleModal, 
        clearErrors,
    } = useFlightStore()

    const CityList = CityData.map(i => i.name)
    const AirlineList = AirlineData.map(i => i.name)

    useEffect(() => {
        resetData()
        clearErrors()
    }, [resetData, clearErrors])

    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        clearErrors();
        e.preventDefault();
    }

   
    return (
        <AnimatePresence>
            {toggleModal && (
                <motion.section
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`w-screen h-screen fixed top-0 left-0 z-200 overflow-y-auto`}>
                    <div className='absolute z-0 top-0 left-0 w-full h-full bg-black opacity-40'></div>
                    <div className='w-full h-full absolute z-10 overflow-auto scroll__width py-24'>
                        <section className='mx-auto lg:w-[60%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                            <div className='flex items-center justify-end'>
                                <ButtonAdminClose onClick={handleToggleModal} />
                            </div>

                            <div className='flex flex-col items-center justify-center mb-6'>
                                <Title name={title} css='text-center mx-auto mb-3' />
                                <hr className="w-full border-b border-gray-100" />
                            </div>
                            <form onSubmit={handleSubmit} className=''>
                                {/* DATE */}
                                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4'>
                                    <TextInput
                                        type='date'
                                        label='Departing Date' 
                                        name='departingDate' 
                                        placeholder='Enter Departing Date here.'
                                        value={data.departingDate} 
                                        onChange={setInputValue} 
                                        error={errors.departingDate}
                                    />
                                    <TextInput
                                        type='date'
                                        label='Arriving Date' 
                                        name='arrivingDate' 
                                        placeholder='Enter Arriving Date here.'
                                        value={data.arrivingDate} 
                                        onChange={setInputValue} 
                                        error={errors.arrivingDate}
                                    />

                                </div>
                                {/* TIME */}
                                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4'>
                                    <TextInput
                                        type='time'
                                        label='Departing Time' 
                                        name='departingTime' 
                                        placeholder='Enter Departing Time here.'
                                        value={data.departingTime} 
                                        onChange={setInputValue} 
                                        error={errors.departingTime}
                                    />
                                    <TextInput
                                        type='time'
                                        label='Arrival Time' 
                                        name='arrivingTime' 
                                        placeholder='Enter Arrival Time here.'
                                        value={data.arrivingTime} 
                                        onChange={setInputValue} 
                                        error={errors.arrivingTime}
                                    />

                                </div>
                                {/* FROM - TO */}
                                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4'>
                                    <SelectInput
                                        label='From' 
                                        name='from' 
                                        data={CityList}
                                        value={data.from} 
                                        onChange={setInputValue} 
                                        error={errors.from}
                                    />
                                    <SelectInput
                                        label='To' 
                                        name='to' 
                                        data={CityList}
                                        value={data.to} 
                                        onChange={setInputValue} 
                                        error={errors.to}
                                    />

                                </div>

                                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4'>
                                  <SelectInput
                                      label='Airline' 
                                      name='airlineName' 
                                      data={AirlineList}
                                      value={data.airlineName} 
                                      onChange={setInputValue} 
                                      error={errors.airlineName}
                                  />
                                  <TextInput
                                      type="number"
                                      name='stops' 
                                      label='Number of Stops' 
                                      value={data.stops.toString()} 
                                      placeholder='Enter the number of stops.'
                                      onChange={setInputValue} 
                                      error={errors.stops.toString()}
                                  /> 
                                </div>

                                <div className='flex items-center justify-center py-2'>
                                    <Button 
                                        name='Submit' 
                                        css='px-12 text-white py-4' 
                                        status={isSubmitting} 
                                    />
                                </div>
                            </form>
                        </section>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}