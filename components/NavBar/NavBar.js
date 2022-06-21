import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import CloseBtn from "../../images/svg/close_40px.svg";
import MenuIcon from "../../images/svg/menu_24px.svg";
import logo from "../../images/logo.png";
import s from "./NavBar.module.css";

export function NavBar({ children }) {
    const [active, setActive] = useState(false);
    return (
        <>
            <nav>
                <div className={s.navContainer}>
                    <div className={s.navWrapper}>
                        <Link href={'/'}><a><Image src={logo} alt="logo" width={150} height={46} /></a></Link>
                        <button type="button" className={s.menuButton} onClick={() => setActive(!active)}>
                            <svg width={40} height={40} aria-label="Mobile menu switch" className={active ? s.iconCross : s.iconMenu}>
                                <CloseBtn className={s.iconCross} />
                                <MenuIcon className={s.iconMenu} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={active ? s.activeSideNav : s.sideNav}>
                    <ul className={s.navList}>
                        <li><Link href={'/'}><a>Головна</a></Link></li>
                        <li><Link href={'/catalog'}><a>Каталог</a></Link></li>
                        <li><Link href={'/brand'}><a>Про бренд</a></Link></li>
                        <li><Link href={'/gallery'}><a>Галерея</a></Link></li>
                        <li><Link href={'/contacts'}><a>Контакти</a></Link></li>
                    </ul>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}