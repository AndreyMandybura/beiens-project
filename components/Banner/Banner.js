import Image from 'next/image';
import logo from '../../images/logo.png';
import s from './Banner.module.css';

export function Banner() {

    return (
        <>
            <div className={s.bannerSection}>
                <div className={s.bannerImgThumb}>
                    <div className={s.bannerImgBox}>
                        <Image className={s.bannerImg} src={logo} alt="logo" width={150} height={46} />
                    </div>
                    <p className={s.bannerText}>родина щаслива з Beiens</p>
                </div>
            </div>
        </>
    );
}