"use client"

import { create } from "zustand"
import { PackageEntity, PackageInterface } from "../entity/PackageEntity"



interface PropInterface{
    data: PackageInterface
    isLoading: boolean
    errors: PackageInterface
    isSubmitting: boolean
    dataList: PackageInterface[]
    setData: (i: PackageInterface) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    resetData: () => void
    setIsSubmitting: (i: boolean) => void
    setError: (name: string, value: string) => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: PackageInterface },
}


export const usePackageStore = create<PropInterface>((set, get) => ({ 
    dataList: [],
    data: PackageEntity,
    isSubmitting: false,
    isLoading: true,
    errors: PackageEntity,
    setData: (i) => {
        set({
            data: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setError: (name, value) => {
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
    resetData: () => {
        set({
            data: PackageEntity
        })
    },
    clearErrors: () => {
        set({
            errors: PackageEntity,
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "from":
                if(!value.trim()){
                    error = "Leaving from is required.";
                } 
                break;
            case "to":
                if(!value.trim()){
                    error = "Going to is required.";
                } 
                break;
            case "departingDate":
                if (!value.trim()) {
                    error = "Departing Date is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...PackageEntity };
        let hasError = false;
        // Validate FROM
        const fromError = get().validateField("from", data.from);
        if (fromError) {
            errors.from = fromError;
            hasError = true;
        }
        // Validate to
        const toError = get().validateField("to", data.to);
        if (toError) {
            errors.to = toError;
            hasError = true;
        }
        // Validate departingDate
        const departingDateError = get().validateField("departingDate", data.departingDate);
        if (departingDateError) {
            errors.departingDate = departingDateError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
}))