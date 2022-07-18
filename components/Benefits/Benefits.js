import Image from 'next/image';
import s from './Benefits.module.css';
import certificate from '../../images/benefitsImages/certificate.jpg';
import delivery from '../../images/benefitsImages/delivery.jpg';
import designe from '../../images/benefitsImages/designe.jpg';
import materials from '../../images/benefitsImages/materials.jpg';
import reviews from '../../images/benefitsImages/reviews.jpg';

export function Benefits() {

    return (
        <>
            <h2 className={s.titleText}>наші переваги</h2>
            <ul className={s.benefitsThumb}>
                <li className={s.benefitsItem}>
                    <div className={s.benefitsImg}>
                        <Image src={reviews} 
                            layout="fill"
                            objectFit="cover"
                            alt="review simbol" />
                    </div>
                    <p className={s.cardTitle}>безліч позитивних відгуків від батьків по всьому світу</p>
                </li>
                <li className={s.benefitsItem}>
                    <div className={s.benefitsImg}>
                        <Image src={certificate} 
                            layout="fill"
                            objectFit="cover"
                            alt="checking simbol" />
                    </div>
                    <p className={s.cardTitle}>офіційна сертифікація</p>
                </li>
                <li className={s.benefitsItem}>
                    <div className={s.benefitsImg}>
                        <Image src={delivery} 
                            layout="fill"
                            objectFit="cover"
                            alt="car simbol" />
                    </div>
                    <p className={s.cardTitle}>швидкий прийом та доставка замовлень</p>
                </li>
                <li className={s.benefitsItem}>
                    <div className={s.benefitsImg}>
                        <Image src={materials} 
                            layout="fill"
                            objectFit="cover"
                            alt="eco simbol" />
                    </div>
                    <p className={s.cardTitle}>безпечні та якісні матеріали</p>
                </li>
                <li className={s.benefitsItem}>
                    <div className={s.benefitsImg}>
                        <Image src={designe} 
                            layout="fill"
                            objectFit="cover"
                            alt="a man in glasses simbol" />
                    </div>
                    <p className={s.cardTitle}>ексклюзивний дизайн</p>
                </li>
            </ul>
        </>
    );
}