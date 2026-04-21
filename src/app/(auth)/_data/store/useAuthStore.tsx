"use client"

import { create } from "zustand"
import { AuthEntity, AuthInterface } from "../entity/AuthEntity"



interface Props{
    data: AuthInterface
    errors: AuthInterface
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
    data: AuthEntity,
    errors: AuthEntity,
    resetData: () => {
        set({
            data: AuthEntity
        })
    },
    clearErrors: () => {
        set({
            errors: AuthEntity
        })
    },
    setValue: (name, value) => {
        const i = get().data
        set({
            data: {...i, [name]: value}
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