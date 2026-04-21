"use client"

import { create } from "zustand"
import { PageMetaEntity, PageMetaInterface } from "../entity/PageMetaEntity"


interface Props{
    data: PageMetaInterface
    errors: PageMetaInterface
    toggleModal: boolean
    isSubmitting: boolean
    search: string
    isSearching: boolean
    setSearch: (i: string) => void
    setIsSearching: (i: boolean) => void
    setIsSubmitting: (i: boolean) => void
    setToggleModal: (i: boolean) => void
    setData: (i: PageMetaInterface) => void
    resetData: () => void
    clearErrors: () => void
    setValue: (name: string, value: string) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void 
}


export const usePageMetaStore = create<Props>((set, get) => ({
    data: PageMetaEntity,
    errors: PageMetaEntity,
    toggleModal: false,
    isSubmitting: false,
    search: '',
    isSearching: false,
    setSearch: (i) => {
        set({
            search: i
        })
    },
    setIsSearching: (i) => {
        set({
            isSearching: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setToggleModal: (i) => {
        set({
            toggleModal: i
        })
    },
    setData: (i) => {
        set({
            data: i
        })
    },
    resetData: () => {
        set({
            data: PageMetaEntity
        })
    },
    clearErrors: () => {
        set({
            errors: PageMetaEntity
        })
    },
    setValue: (name, value) => {
        const current = get().data
        set({
            data: {...current, [name]: value}
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
}))