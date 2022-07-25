import Image from 'next/image';
import Link from "next/link";
import logo from '../../images/logo.png';
import s from './Footer.module.css';

export function Footer() {

    return (
        <>
            <footer className={s.footerSection}>
                <div className={s.contactsBox}>
                    <Link href={'/'}>
                        <a>
                            <Image className={s.footerImg} src={logo} alt="logo" width={150} height={46} />
                        </a>
                    </Link>
                    <ul className={s.contactsList}>
                        <li className={s.contactsItem}>
                            <a className={s.activeLink} href='tel:+380674647785'>+38 067 464 77 85</a>
                        </li>
                        <li className={s.contactsItem}>
                            <a className={s.activeLink} href='mailto:official.beiens.ua@gmail.com'>official.beiens.ua@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className={s.catalogBox}>
                    <h3 className={s.catalogTitle}>Каталог</h3>
                    <ul className={s.catalog}>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Іграшки для малюків</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Брязкальця та гризунці</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Іграшки нічники</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Розвиваючі центри, килимки та крісла-качалки</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Графічні планшети</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Дитячі ігрові комплекси</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Чудомобілі, ходунки, качалки</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Дитячі стільці</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>3D ручки</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Столи для творчості</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/'}>
                                <a className={s.activeLink}>
                                    <span>Мобілі</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}