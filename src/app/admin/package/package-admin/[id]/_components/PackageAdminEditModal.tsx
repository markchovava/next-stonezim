"use client"

import React, { useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Title from '@/app/(main)/_components/titles/Title';
import TextInput from '@/app/(main)/_components/forms/inputs/TextInput';
import Button from '@/app/(main)/_components/buttons/Button';
import SelectInput from '@/app/(main)/_components/forms/selects/SelectInput';
import { PriorityData } from '@/app/admin/_data/sample/PriorityData';
import ButtonAdminClose from '@/app/admin/_components/buttons/ButtonAdminClose';
import { usePackageStore } from '../../_data/store/usePackageStore';




const title = "Edit Package"

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

interface Props{
  id: string | number
}

export default function PackageAdminAddModal({
  id
}: Props) {
    const { 
        data, 
        errors,
        toggleModal,
        isSubmitting,
        resetData,
        setInputValue, 
        setToggleModal, 
        clearErrors,
    } = usePackageStore()

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
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <TextInput
                                    label='Name' 
                                    name='name' 
                                    type="text"
                                    value={data.name} 
                                    placeholder='Enter your Name.'
                                    onChange={setInputValue} 
                                    error={errors.name}
                                /> 
                              
                               <SelectInput 
                                    label='Priority' 
                                    name='priority' 
                                    data={PriorityData}
                                    value={data.priority} 
                                    onChange={setInputValue} 
                                    error={errors.priority}
                               />
                                <div className='flex items-center justify-center'>
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