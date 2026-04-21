"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useAppInfoStore } from '../_data/store/useAppInfoStore';
import Title from '@/app/(main)/_components/titles/Title';
import ButtonAdminClose from '../../_components/buttons/ButtonAdminClose';
import TextInput from '@/app/(main)/_components/forms/inputs/TextInput';
import TextArea from '@/app/(main)/_components/forms/textareas/TextArea';
import Button from '@/app/(main)/_components/buttons/Button';



const title = "Edit App Information"


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


export default function AppInfoEditModal() {
    const { 
        data, 
        errors,
        toggleModal,
        isSubmitting,
        setInputValue, 
        setToggleModal, 
        clearErrors,
    } = useAppInfoStore()

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

                            <Title name={title} css='text-center mb-6' />
                            <hr className="w-full border-b border-gray-100" />
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                
                                <TextInput
                                    label='Name:' 
                                    name='name' 
                                    type="text"
                                    value={data.name} 
                                    placeholder='Enter your Name.'
                                    onChange={setInputValue} 
                                    error={errors.name}
                                /> 
                                <TextInput
                                    label='Email:' 
                                    name='email' 
                                    type="email"
                                    value={data.email} 
                                    placeholder='Enter your Email.'
                                    onChange={setInputValue} 
                                    error={errors.email}
                                />
                                
                                <TextInput
                                    label='Phone Number:' 
                                    name='phone' 
                                    type="text"
                                    value={data.phone} 
                                    placeholder='Enter your Phone Number.'
                                    onChange={setInputValue} 
                                    error={errors.phone}
                                />

                                <TextInput
                                    type="text"
                                    label='Website:' 
                                    name='website' 
                                    value={data.website} 
                                    placeholder='Enter your Website.'
                                    onChange={setInputValue} 
                                    error={errors.website}
                                />

                                <TextInput
                                    type="text"
                                    label='Address' 
                                    name='address' 
                                    value={data.address} 
                                    placeholder='Enter Address here.'
                                    onChange={setInputValue} 
                                    error={errors.address}
                                />
                                
                                <TextArea
                                    label='Description:' 
                                    name='description' 
                                    value={data.description} 
                                    placeholder='Enter Description here.'
                                    onChange={setInputValue} 
                                    error={errors.description}
                                />
                                
                                <TextInput
                                    label='Facebook:' 
                                    name='facebook' 
                                    type="text"
                                    value={data.facebook} 
                                    placeholder='Enter Facebook Link here.'
                                    onChange={setInputValue} 
                                />
                          
                                <TextInput
                                    label='Instagram:' 
                                    name='instagram' 
                                    type="text"
                                    value={data.instagram} 
                                    placeholder='Enter Instagram Link...'
                                    onChange={setInputValue} 
                                />
                                
                                <TextInput
                                    label='WhatsApp:' 
                                    name='whatsapp' 
                                    type="text"
                                    value={data.whatsapp} 
                                    placeholder='Enter WhatsApp Number...'
                                    onChange={setInputValue} 
                                />
                                
                                <TextInput
                                    label='TikTok:' 
                                    name='tiktok' 
                                    type="text"
                                    value={data.tiktok} 
                                    placeholder='Enter TikTok Link...'
                                    onChange={setInputValue}
                                    
                                />
                                
                                <TextInput
                                    label='LinkedIn:' 
                                    name='linkedin' 
                                    type="text"
                                    value={data.linkedin} 
                                    placeholder='Enter LinkedIn Link...'
                                    onChange={setInputValue} 
                                />

                                <TextInput
                                    label='Twitter:' 
                                    name='twitter' 
                                    type="text"
                                    value={data.twitter} 
                                    placeholder='Enter Twitter Link...'
                                    onChange={setInputValue} 
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