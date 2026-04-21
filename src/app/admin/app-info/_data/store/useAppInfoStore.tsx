"use client"

import { create } from "zustand"
import { AppInfoEntity, AppInfoInterface } from "../entity/AppInfoEntity"



interface Props{
    data: AppInfoInterface
    errors: AppInfoInterface
    toggleModal: boolean
    isSubmitting: boolean
    setIsSubmitting: (i: boolean) => void
    setToggleModal: (i: boolean) => void
    setData: (i: AppInfoInterface) => void
    resetData: () => void
    clearErrors: () => void
    setValue: (name: string, value: string) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void 
}


export const useAppInfoStore = create<Props>((set, get) => ({
    data: AppInfoEntity,
    errors: AppInfoEntity,
    toggleModal: false,
    isSubmitting: false,
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
            data: AppInfoEntity
        })
    },
    clearErrors: () => {
        set({
            errors: AppInfoEntity
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