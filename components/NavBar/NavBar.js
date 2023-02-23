import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import CloseBtn from "../../images/svg/close_40px.svg";
import MenuIcon from "../../images/svg/menu_24px.svg";
import logo from "../../images/logo.png";
import s from "./NavBar.module.css";

export function NavBar({ children, title='Beiens' }) {
    const [active, setActive] = useState(false);
    return (
        <>
            <Head>
                <title>Beiens | {title}</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="keywords" content="beiens, бейнс, бэйнс, дитячі іграшки, детские игрушки, брязкальця, погремушки, гризунці, грызунцы, неваляшки, нічники, ночники, дитячі піраміди, детские пирамиды, силіконові кубики, силиконовые кубики, силіконові м'ячики, силиконовые мячики, лабіринти, лабиринты, сортувальники, сортировщики, ходунки-каталки, ходунки-каталки, розвиваючі килимки, развивающие коврики, графічні планшети для малювання, графические планшеты для рисования, спортивні ігрові комплекси, спортивные ыгровые комплексы, мультикуб, біговели, беговелы, гойдалки, качалки, розвиваючі картки, развивающие карточки, дитячі стільці, детские стульчики, кошики з овочами, корзина с овощами, генератори мильних бульбашок, генераторы мыльных пузырьков, іграшки для купання, игрушки для купания, дитяча рибалка, детская рыбалка, візочки для покупок, тележка для покупок, мобілі, мобили, 3D ручки, дитячі авто ключі, детские авто ключи" />
                <meta name="description" content="This is the official website of children's toys brand Beiens in Ukraine. Це офіційний сайт бренду Beiens в Україні. На сайті: дитячі іграшки, брязкальця, гризунці, неваляшки, нічники, дитячі піраміди, силіконові кубики, силіконові м'ячики, лабіринти, сортувальники, ходунки-каталки, розвиваючі килимки, графічні планшети для малювання, спортивні ігрові комплекси, мультикуб, біговели, гойдалки, розвиваючі картки, дитячі стільці, кошики з овочами, генератори мильних бульбашок, іграшки для купання, дитяча рибалка, візочки для покупок, мобілі, 3D ручки, дитячі авто ключі. Офіційний імпортер. Гарантія." />
            </Head>
            <ScrollToTop top={700} color={"#3f8cce"} smooth={true}/>
            <nav className="container">
                    <div className={s.navContainer}>
                        <div className={s.navWrapper}>
                            <Link href={'/'}><a className={s.logo} ><Image src={logo} alt="logo" width={150} height={46} /></a></Link>
                            <div className={active ? s.activeNavListContainer : s.navListContainer}>
                                <ul className={s.navList}>
                                    <li className={s.navItem}><Link href={'/'}><a>головна</a></Link></li>
                                    <li className={s.navItem}><Link href={'/catalog'}><a>каталог</a></Link></li>
                                    <li className={s.navItem}><Link href={'/brand'}><a>про бренд</a></Link></li>
                                    <li className={s.navItem}><Link href={'/gallery'}><a>галерея</a></Link></li>
                                    <li className={s.navItem}><Link href={'/contacts'}><a>контакти</a></Link></li>
                                </ul>
                            </div>
                            <button type="button" className={s.menuButton} onClick={() => setActive(!active)}>
                                <svg width={40} height={40} aria-label="Mobile menu switch" className={active ? s.iconCross : s.iconMenu}>
                                    <CloseBtn className={s.iconCross} />
                                    <MenuIcon className={s.iconMenu} />
                                </svg>
                            </button>
                        </div>
                    </div>
            </nav>
            <main className="container">
                {children}
            </main>
        </>
    )
}