"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import Title from "@/app/(main)/_components/titles/Title"
import Link from "next/link"
import ButtonPaginate from "@/app/(main)/_components/buttons/ButtonPaginate"
import { useMessageStore } from "../_data/store/useMessageStore"
import SearchForm from "@/app/admin/_components/forms/SearchForm"
import ViewButton from "@/app/admin/_components/buttons/ViewButton"
import DeleteButton from "@/app/admin/_components/buttons/DeleteButton"



const title = 'Messages'


export default function MessagePage() {
    const {
        search, 
        isSearching, 
        setIsSearching, 
        setSearch, 
        setToggleModal
    } = useMessageStore()

    const handleSearch = async () => {}

  return (
    <>
    <main className="pt-20 pb-24">
        <section className="container__primary">
            <Title 
                name={title} 
                css='border-b pb-2 mb-3 border-gray-300' 
            />
            <div className="mb-4 w-full bg-white rounded-xl overflow-hidden drop-shadow px-4 py-3 flex md:flex-row flex-col items-center justify-between gap-4">
                <div className="md:w-[60%] w-full">
                    <SearchForm
                        placeholder='Enter Search here.'
                        name='search'
                        value={search}
                        status={isSearching}
                        onChange={(e) => setSearch(e.target.value)}
                        onSubmit={handleSearch}
                    />
                </div>
                <Button 
                    name='Add' 
                    css='md:px-6 px-12 h-12' 
                    onClick={() => setToggleModal(true)} 
                />
            </div>

            <MessageTableSection />


        </section>
    </main>
    </>
  )
}


function MessageTableSection(){
     const {
        search, 
        isSearching, 
        setIsSearching, 
        setSearch, 
        setToggleModal
    } = useMessageStore()

    return(
        <>
            <section className="lg:block hidden w-full">
                <div className="w-full text-lg font-semibold border border-gray-300 bg-gray-100 flex items-center justify-start">
                    <div className="w-[30%] px-4 py-2 border-r border-gray-300">NAME</div>
                    <div className="w-[40%] px-4 py-2 border-r border-gray-300">EMAIL</div>
                    <div className="w-[20%] px-4 py-2 border-r border-gray-300">STATUS</div>
                    <div className="w-[10%] flex items-center justify-end px-4 py-2 ">ACTIONS</div>
                </div>
                {[...Array(5)].map((i, key) => (
                    <div key={key} className="text-gray-700 w-full border border-gray-300 flex items-center justify-start">
                        <div className="w-[30%] px-4 py-2 border-r border-gray-300">NAME</div>
                        <div className="w-[40%] px-4 py-2 border-r border-gray-300">EMAIL</div>
                        <div className="w-[20%] px-4 py-2 border-r border-gray-300">STATUS</div>
                        <div className="w-[10%] px-4 py-2 flex items-center justify-end gap-3">
                            <Link 
                                href='/admin/message/1' 
                                className="flex items-center justify-center">
                                <ViewButton />
                            </Link>
                            <DeleteButton onClick={() => {}} />
                        </div>
                    </div>
                ))}
            </section>

            <section className="lg:hidden block space-y-5">
                {[...Array(5)].map((i, key) => (
                    <div key={key} className="bg-white text-gray-700 drop-shadow border border-gray-200 rounded-xl overflow-hidden p-6">
                        <div className="flex items-center justify-end gap-3">
                                <Link href='/admin/flight/airline/1' className="flex items-center justify-center">
                                    <ViewButton />
                                </Link>
                                <DeleteButton onClick={() => {}} />
                            </div>
                        <div className="mb-4">
                            <p className="text-sm font-medium">Name:</p>
                            <p>The name</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-medium">Email:</p>
                            <p>The name</p>
                        </div>
                        <div className="">
                            <p className="text-sm font-medium">Status:</p>
                            <p>The name</p>
                        </div>
                    </div>
                ))}
            </section>

            <div className='flex items-center justify-end gap-4 mt-12'>
                <ButtonPaginate name='Prev' />
                <ButtonPaginate name='Next' />
            </div>
        </>
    )
}
