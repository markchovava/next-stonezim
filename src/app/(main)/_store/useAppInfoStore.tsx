"use client"

import { AppInfoEntity, AppInfoInterface } from "@/app/admin/app-info/_data/entity/AppInfoEntity"
import { create } from "zustand"




interface Props{
    data: AppInfoInterface
    errors: AppInfoInterface
    resetData: () => void
    clearErrors: () => void
    setValue: (name: string, value: string) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void 
}


export const useAuthStore = create<Props>((set, get) => ({
    data: AppInfoEntity,
    errors: AppInfoEntity,
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