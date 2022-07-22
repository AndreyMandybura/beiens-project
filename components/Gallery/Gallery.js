import Image from 'next/image';
import Link from "next/link";
import gallery1 from '../../images/gallery/galleryImg1.jpg';
import gallery2 from '../../images/gallery/galleryImg2.jpg';
import gallery3 from '../../images/gallery/galleryImg3.jpg';
import gallery4 from '../../images/gallery/galleryImg4.jpg';
import gallery5 from '../../images/gallery/galleryImg5.jpg';
import gallery6 from '../../images/gallery/galleryImg6.jpg';
import s from './Gallery.module.css';

export function Gallery() {

    return (
        <>
            <div className={s.gallerySection}>
                <h2 className={s.titleText}>галерея</h2>
                <ul className={s.galleryThumb}>
                    <li className={s.galleryItem}>
                        <Link href={'/gallery'}>
                            <a>
                                <div className={s.galleryImg}>
                                    <Image
                                        src={gallery1}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="child with a toy"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className={s.galleryItem}>
                        <Link href={'/gallery'}>
                            <a>
                                <div className={s.galleryImg}>
                                    <Image
                                        src={gallery2}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="child with a toy"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className={s.galleryItem}>
                        <Link href={'/gallery'}>
                            <a>
                                <div className={s.galleryImg}>
                                    <Image
                                        src={gallery3}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="child with a toy"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
                <ul className={s.galleryThumb}>
                    <li className={s.galleryItem}>
                        <Link href={'/gallery'}>
                            <a>
                                <div className={s.galleryImg}>
                                    <Image
                                        src={gallery4}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="child with a toy"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className={s.galleryItem}>
                        <Link href={'/gallery'}>
                            <a>
                                <div className={s.galleryImg}>
                                    <Image
                                        src={gallery5}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="child with a toy"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className={s.galleryItem}>
                        <Link href={'/gallery'}>
                            <a>
                                <div className={s.galleryImg}>
                                    <Image
                                        src={gallery6}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="child with a toy"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}