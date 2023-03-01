import Image from 'next/image';
import s from './Trendind.module.css';
import forBabies from '../../images/trendidImages/YZ06-5.jpg'; 
import rattles from '../../images/trendidImages/YZ42-6.jpg'; 
import pens from '../../images/trendidImages/ZN17-3.jpg';
import gameSets from '../../images/trendidImages/BC9902-3.jpg';
import tablets from '../../images/trendidImages/ZJ16-C-2.jpg';
import Link from 'next/link';

export function Trendind() {

    return (
        <>
            <h2 className={s.titleText}>популярне</h2>
            <ul className={s.trendidThumb}>
                <li className={s.trendidItem}>
                    <Link href={'/category/1001'}>
                        <a>
                            <div className={s.trendidImg}>
                                <Image src={forBabies} 
                                layout="fill"
                                objectFit="cover"
                                alt="child with a toy" />
                            </div>
                        </a>
                    </Link>
                    <p className={s.cardTitle}>для малюків</p>
                </li>
                <li className={s.trendidItem}>
                    <Link href={'/category/1002'}>
                        <a>
                            <div className={s.trendidImg}>
                                <Image src={rattles} 
                                layout="fill"
                                objectFit="cover"
                                alt="child with a toys" />
                            </div>
                        </a>
                    </Link>
                    <p className={s.cardTitle}>брязкальця та гризунці</p>
                </li>
            </ul>
            <ul className={s.trendidThumb}>
                <li className={s.trendidItem}>
                    <Link href={'/category/1009'}>
                        <a>
                            <div className={s.trendidImgSL}>
                                <Image src={pens}
                                layout="fill"
                                objectFit="cover"
                                alt="mother playing with child" />
                            </div>
                        </a>
                    </Link>
                    <p className={s.cardTitle}>3D ручки</p>
                </li>
                <li className={s.trendidItem}>
                    <Link href={'/category/1015'}>
                        <a>
                            <div className={s.trendidImgSL}>
                                <Image src={gameSets} 
                                layout="fill"
                                objectFit="cover"
                                alt="child playing on a children's rug" />
                            </div>
                        </a>
                    </Link>
                    <p className={s.cardTitle}>ігрові набори</p>
                </li>
                <li className={s.trendidItem}>
                    <Link href={'/category/1005'}>
                        <a>
                            <div className={s.trendidImgSL}>
                                <Image src={tablets} 
                                layout="fill"
                                objectFit="cover"
                                alt="child with tablet" />
                            </div>
                        </a>
                    </Link>
                    <p className={s.cardTitle}>графічні планшети</p>
                </li>
            </ul>
        </>
    );
}