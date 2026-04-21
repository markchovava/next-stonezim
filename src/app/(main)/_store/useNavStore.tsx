"use client"

import { create } from "zustand";
import { NavEntity, NavIconInterface, NavInterface } from "../_data/entity/NavEntity"
import { NavData, NavIconData } from "../_data/sample/NavData";


interface PropInterface{
    isHome: boolean
    navList: NavInterface[]
    navIconList: NavIconInterface[]
    current: NavInterface
    isMenu: boolean
    setIsHome: (i: boolean) => void
    setIsMenu: (i: boolean) => void 
    setIsOpen: (a: boolean, b: NavInterface) => void
    setNavList: (i: NavInterface[]) => void
    setCurrent: (i: NavInterface) => void
}


export const useNavStore = create<PropInterface>((set, get) => ({ 
    isHome: false,
    navList: NavData,
    navIconList: NavIconData,
    current: NavEntity,
    toggleModal: false,
    isMenu: false,
    setIsHome: (i) => {
        set({
            isHome: i
        })
    },
    setIsMenu: (i) => {
        set({
            isMenu: i
        })
    },
    setCurrent: (i) => {
        set({
            current: i
        })
    },
    setIsOpen: (a, b) => {
        const list = get().navList
        set({
            navList: list.map((i) => (
                i.id == b.id ? {...i, isOpen: a} : {...i, isOpen: false}
            ))
        })
    },
    setNavList: (i) => {
        set({
            navList: i
        })
    },
   
}))