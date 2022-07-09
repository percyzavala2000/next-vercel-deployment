import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./navbar.module.css"

interface MenuItem {
    text: string;
    href: string;
}

export const ActiveLink:FC<MenuItem> = ({text,href})=> {
    const {asPath}=useRouter();
    
  
  return (
    <Link href={href} >
        <a className={(asPath===href)?style.active:""}>
            {text}
        </a>
    </Link>
  )
}
