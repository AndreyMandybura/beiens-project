import Link from "next/link";
import { useState } from "react";
import CloseBtn from "../../images/svg/close_40px.svg"
import MenuIcon from "../../images/svg/menu_24px.svg"
import s from "./NavBar.module.css"

export function NavBar({ children }) {
    const [active, setActive] = useState(false);
    return (
        <>
            <nav>
                <Link href={'/'}><a>LOGO</a></Link>
                <Link href={'/'}><a>Головна</a></Link>
                <Link href={'/catalog'}><a>Каталог</a></Link>
                <Link href={'/brand'}><a>Про бренд</a></Link>
                <Link href={'/gallery'}><a>Галерея</a></Link>
                <Link href={'/contacts'}><a>Контакти</a></Link>
                <button type="button" className={s.menuButton} onClick={() => setActive(!active)}>
                    <svg width={40} height={40} aria-label="Mobile menu switch" className={active ? s.iconCross : s.iconMenu}>
                        <CloseBtn className={s.iconCross} />
                        <MenuIcon className={s.iconMenu} />
                    </svg>
                </button>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}