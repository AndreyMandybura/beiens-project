import Image from 'next/image';
import s from './Trendind.module.css';
import forBabies from '../../images/trendidImages/YZ06-5.jpg'; 
import rattles from '../../images/trendidImages/YZ42-6.jpg'; 
import pens from '../../images/trendidImages/ZN17-3.jpg';
import babyRugs from '../../images/trendidImages/B250-1.jpg';
import tablets from '../../images/trendidImages/ZJ16-C-2.jpg';

export function Trendind() {

    return (
        <>
            <h2 className={s.titleText}>популярне</h2>
            <ul className={s.trendidThumb}>
                <li className={s.trendidItem}>
                    <div className={s.trendidImg}>
                        <Image src={forBabies} 
                            layout="fill"
                            objectFit="cover"
                            alt="child with a toy" />
                    </div>
                    <p className={s.cardTitle}>для малюків</p>
                </li>
                <li className={s.trendidItem}>
                    <div className={s.trendidImg}>
                        <Image src={rattles} 
                            layout="fill"
                            objectFit="cover"
                            alt="child with a toys" />
                    </div>
                    <p className={s.cardTitle}>брязкальця та гризунці</p>
                </li>
            </ul>
            <ul className={s.trendidThumb}>
                <li className={s.trendidItem}>
                    <div className={s.trendidImgSL}>
                        <Image src={pens}
                            layout="fill"
                            objectFit="cover"
                            alt="mother playing with child" />
                    </div>
                    <p className={s.cardTitle}>3D ручки</p>
                </li>
                <li className={s.trendidItem}>
                    <div className={s.trendidImgSL}>
                        <Image src={babyRugs} 
                            layout="fill"
                            objectFit="cover"
                            alt="child playing on a children's rug" />
                    </div>
                    <p className={s.cardTitle}>розвиваючі центри</p>
                </li>
                <li className={s.trendidItem}>
                    <div className={s.trendidImgSL}>
                        <Image src={tablets} 
                            layout="fill"
                            objectFit="cover"
                            alt="child with tablet" />
                    </div>
                    <p className={s.cardTitle}>графічні планшети</p>
                </li>
            </ul>
        </>
    );
}