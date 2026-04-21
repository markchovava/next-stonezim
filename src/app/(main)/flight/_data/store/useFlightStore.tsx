"use client"

import { create } from "zustand"
import { FlightEntity, FlightInterface } from "../entity/FlightEntity"



interface PropInterface{
    data: FlightInterface
    isLoading: boolean
    errors: FlightInterface
    isSubmitting: boolean
    dataList: FlightInterface[]
    setData: (i: FlightInterface) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    resetData: () => void
    setIsSubmitting: (i: boolean) => void
    setError: (name: string, value: string) => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: FlightInterface },
}


export const useFlightStore = create<PropInterface>((set, get) => ({ 
    dataList: [],
    data: FlightEntity,
    isSubmitting: false,
    isLoading: true,
    errors: FlightEntity,
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
            data: FlightEntity
        })
    },
    clearErrors: () => {
        set({
            errors: FlightEntity,
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
            case "returningDate":
                if (!value.trim()) {
                    error = "Returning Date is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...FlightEntity };
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
        // Validate returningDate
        const returningDateError = get().validateField("returningDate", data.returningDate);
        if (returningDateError) {
            errors.returningDate = returningDateError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
}))