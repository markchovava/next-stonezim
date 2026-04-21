import { NavInterface } from "../entity/NavEntity";


export const NavData: NavInterface[] = [
    {id: 1, name: 'Home', href:'/', isOpen: false, items: []},
    {id: 2, name: 'Flights',  href:'/flight', isOpen: false, items: []},
    {id: 3, name: 'Packages',  href:'/package', isOpen: false, items: []},
    {id: 3, name: 'Visas',  href:'/visa', isOpen: false, items: []},
    {id: 4, name: 'Contact Us',  href:'/contact', isOpen: false, items: []},
]

export const OtherNavData: NavInterface[] = [
    {id: 1, name: 'Help', href:'/', isOpen: false, items: []},
    {id: 2, name: 'Privacy Policy',  href:'#', isOpen: false, items: []},
    {id: 3, name: 'Terms of Use',  href:'#', isOpen: false, items: []},
    {id: 4, name: 'About Us',  href:'#', isOpen: false, items: []},
    {id: 5, name: 'Change or Cancel your Booking ',  href:'#', isOpen: false, items: []},
]

export const NavIconData = [
    {id: 1, name: 'User', iconType: 'user', href: '#'},
    {id: 1, name: 'Contact Us', iconType: 'contact', href: '#'},
    {id: 1, name: 'Help', iconType: 'help', href: '#'},
]


export const SocialData: NavInterface[] = [
    {id: 1, name: 'facebook', href:'#', isOpen: false, css: 'text-blue-600', items: []},
    {id: 2, name: 'whatsapp', href:'#', css: 'text-green-600', isOpen: false, items: []},
    {id: 3, name: 'linkedin', href:'#', css: 'text-blue-800', isOpen: false, items: []},
    {id: 4, name: 'twitter', href:'#', css: 'text-black', isOpen: false, items: []},
    {id: 5, name: 'instagram', href:'#', css: 'text-pink-600', isOpen: false, items: []},
    {id: 6, name: 'tiktok', href:'#', css: 'text-purple-800', isOpen: false, items: []},
]