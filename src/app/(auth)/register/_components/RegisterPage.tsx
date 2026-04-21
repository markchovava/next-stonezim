"use client"

import Logo from "@/app/(main)/_components/logos/Logo"
import { useAuthStore } from "../../_data/store/useAuthStore"
import TextInput from "@/app/(main)/_components/forms/inputs/TextInput"
import PasswordInput from "@/app/(main)/_components/forms/inputs/PasswordInput"
import Button from "@/app/(main)/_components/buttons/Button"
import Link from "next/link"
import { useEffect } from "react"


const title = 'Register'

export default function RegisterPage() {
    const {data, setValue, clearErrors, resetData, setInputValue} = useAuthStore()

    useEffect(() => {
        clearErrors()
        resetData()
    }, [clearErrors, resetData])
  
    return (
    <>
    <main className="py-24">
        <section className="mx-auto w-[92%] lg:w-[50%] rounded-xl bg-white drop-shadow-lg px-6 py-8">
            <div className="flex flex-col items-center justify-center mb-4">
                <Logo color="text-blue-800 mb-4" />
                <h2 className="font-medium text-xl text-gray-700">
                  {title}
                </h2>
            </div>

            <TextInput 
                label="Email"
                name='email'
                onChange={setInputValue}
                type="text"
                placeholder="Enter the Email here."
                value={data.email}
            />

            <PasswordInput 
                label="Password"
                name='password'
                onChange={(e) => setValue('password', e.target.value) }
                placeholder="Enter the Password here."
                value={data.password}
            />


            <PasswordInput 
                label="Confirm Password"
                name='passwordConfirm'
                onChange={(e) => setValue('password', e.target.value) }
                placeholder="Enter the Password here."
                value={data.password}
            />

            <Button 
                name="Register" 
                css="w-full rounded-xl py-3 mt-4" />

            <p className="text-gray-700 text-center text-sm py-6">
                Other ways to Register
            </p>

            <button className={`cursor-pointer rounded-xl w-full py-2.5 border border-gray-700 text-gray-700 
                hover:border-blue-700 hover:text-blue-700 ease-in-out duration-200 transition-all`}>
                Continue with Google
            </button>
            
            <p className="mt-6 text-gray-700">
                Already registered? 
                <Link 
                    href='/login' 
                    className={`mx-1 ease-in-out transition-all duration-200 text-blue-700 border-b-2 border-blue-700 
                    hover:border-transparent`}>
                    Login
                </Link>
            </p>
        </section>
    </main>
    </>
  )
}
