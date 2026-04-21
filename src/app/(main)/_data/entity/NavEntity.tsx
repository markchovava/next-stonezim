export interface NavInterface{
    id: number | string 
    name: string
    href: string
    isOpen: boolean
    items: NavInterface[]
    css?: string
}

export const NavEntity: NavInterface = {
    id: "", 
    name: '', 
    href: '', 
    isOpen: false, 
    items: [],
    css: '',
}

export interface NavIconInterface{
    id: number, 
    name: string, 
    iconType: string,
    href: string
}

export const NavIconEntity: NavIconInterface = {
    id: 0,
    name: '',
    iconType: '',
    href: '',
}