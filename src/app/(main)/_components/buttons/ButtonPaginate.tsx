"use client"
import IconDefault from '@/_components/icons/IconDefault'


interface PropInterface {
    name: 'Next' | 'Prev' | string 
    onClick?: () => void
}

export default function ButtonPaginate({ name, onClick }: PropInterface) {
    // 1. Define variables that change based on the 'name'
    let iconType: 'left' | 'right' = 'right'
    let isIconFirst = false

    // 2. The switch handles the logic/configuration only
    switch (name) {
        case 'Prev':
            iconType = 'left'
            isIconFirst = true
            break
        case 'Next':
        default:
            iconType = 'right'
            isIconFirst = false
            break
    }

    return (
        <button
            type='button'
            onClick={onClick}
            className={`cursor-pointer bg-white hover:drop-shadow group flex items-center 
                justify-center gap-1 rounded-full px-6 py-2 border border-gray-300 
                transition-shadow`}>
            {isIconFirst && (
                <IconDefault
                    type={iconType}
                    css='group-hover:-translate-x-1 ease-in-out transition-all text-gray-600'
                />
            )}

            <span>{name}</span>

            {!isIconFirst && (
                <IconDefault
                    type={iconType}
                    css='group-hover:translate-x-1 ease-in-out transition-all text-gray-600'
                />
            )}
        </button>
    )
}