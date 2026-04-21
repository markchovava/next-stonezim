"use client"

import Spacer from "@/_components/spacers/Spacer"
import ContactSection from "../../_components/sections/ContactSection"
import { useEffect } from "react"
import { useNavStore } from "../../_store/useNavStore"
import { useAppInfoStore } from "@/app/admin/app-info/_data/store/useAppInfoStore"



interface PropInterface{
    appInfoData: any
}

export default function ContactPage({appInfoData}: PropInterface) {
    const {
        setData: setAppInfoData
    } = useAppInfoStore()
    const { isHome, setIsHome } = useNavStore()

    console.log('isHome', isHome)
    
    
    useEffect(() => {
        if(appInfoData?.data) {
            setAppInfoData(appInfoData.data)
        }
        setIsHome(false)
    }, [setAppInfoData, setIsHome])

  return (
    <>
        <Spacer />
        <ContactSection withMap={true} />
    </>
  )
}
