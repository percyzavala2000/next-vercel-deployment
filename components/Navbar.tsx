import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import style from "./navbar.module.css"

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={style['menu-container']} >
            {
                menuItems.map(item => {
                    return <ActiveLink key={item.text} text={item.text} href={item.href} />
                })
            }
            
            
        </nav>
    )
}
