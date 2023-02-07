import Image from 'next/image';
import Link from "next/link";
import logo from '../../images/logo.png';
import Instagram from '../../images/svg/instagramIcon.svg';
import Facebook from '../../images/svg/fbIcon.svg';
import Pinterest from '../../images/svg/pinterestIcon.svg';
import YouTube from '../../images/svg/youtubeIcon.svg';
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
                    <ul className={s.socialsList}>
                        <li className={s.socialsItem}>
                            <Link href={'https://instagram.com/beiens_ua?igshid=YmMyMTA2M2Y='}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <svg width={40} height={40} aria-label="Instagram icon">
                                        <Instagram className={s.socialsIcon} />
                                    </svg>
                                </a>
                            </Link>
                        </li>
                        <li className={s.socialsItem}>
                            <Link href={'https://www.facebook.com/people/Beiens_ua/100084279805756/'}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <svg width={40} height={40} aria-label="Facebook icon">
                                        <Facebook className={s.socialsIcon} />
                                    </svg>
                                </a>
                            </Link>
                        </li>
                        <li className={s.socialsItem}>
                            <Link href={'https://pin.it/4BKAOto'}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <svg width={40} height={40} aria-label="Pinterest icon">
                                        <Pinterest className={s.socialsIcon} />
                                    </svg>
                                </a>
                            </Link>
                        </li>
                        <li className={s.socialsItem}>
                            <Link href={'https://youtube.com/channel/UC0sz9AeCVMmSv3MUDgfgpiQ'}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <svg width={40} height={40} aria-label="YouTube icon">
                                        <YouTube className={s.socialsIcon} />
                                    </svg>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={s.catalogBox}>
                    <h3 className={s.catalogTitle}>Каталог</h3>
                    <ul className={s.catalog}>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1001'}>
                                <a className={s.activeLink}>
                                    <span>Іграшки для малюків</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1002'}>
                                <a className={s.activeLink}>
                                    <span>Брязкальця та гризунці</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1003'}>
                                <a className={s.activeLink}>
                                    <span>Іграшки нічники</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1004'}>
                                <a className={s.activeLink}>
                                    <span>Розвиваючі центри, килимки та крісла-качалки</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1005'}>
                                <a className={s.activeLink}>
                                    <span>Графічні планшети</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1006'}>
                                <a className={s.activeLink}>
                                    <span>Дитячі ігрові комплекси</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1007'}>
                                <a className={s.activeLink}>
                                    <span>Чудомобілі, ходунки, качалки</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1008'}>
                                <a className={s.activeLink}>
                                    <span>Дитячі стільці</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1009'}>
                                <a className={s.activeLink}>
                                    <span>3D ручки</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1010'}>
                                <a className={s.activeLink}>
                                    <span>Столи для творчості</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1011'}>
                                <a className={s.activeLink}>
                                    <span>Мобілі</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1012'}>
                                <a className={s.activeLink}>
                                    <span>Стукалки</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1013'}>
                                <a className={s.activeLink}>
                                    <span>Сортувальники</span>
                                </a>
                            </Link>
                        </li>
                        <li className={s.catalogItem}>
                            <Link href={'/category/1014'}>
                                <a className={s.activeLink}>
                                    <span>Дитячі велосипеди</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}