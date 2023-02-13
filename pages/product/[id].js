import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import data from '../../ProductsCatalogData.json';
import {Available} from '../../components/Available/Available';
import { NotAvailable } from '../../components/NotAvailable/NotAvailable';
import IconSliderRight from "../../images/svg/icon_slider_right.svg";
import IconSliderLeft from "../../images/svg/icon_slider_left.svg";
import s from "../../styles/Product.module.css"

export default function Product() {
    const router = useRouter();
    const [toggler, setToggler] = useState(false);
    return (
        <>
            <NavBar title={"Продукт"}>
                <div className={s.productSection}>
                    <ul>
                        {data.products.filter(p => router.query.id === p.id).map(product => 
                            <li key={product.id}>
                                <h1 className={s.productTitle}>{product.name}</h1>
                                <div className={s.productImgBox}>
                                       <button onClick={() => setToggler(!toggler)} className={s.productButton}>
                                            <div className={s.productImg}>
                                                <Image
                                                    src={product.images.find(index => index[1])}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    alt="child with a toy"
                                                />
                                            </div>
                                                <svg width={40} height={40} className={s.iconSliderLeft}>
                                                    <IconSliderLeft aria-label="IconSliderLeft" className={s.iconSlider} />
                                                </svg>
                                                <svg width={40} height={40} className={s.iconSliderRight}>
                                                    <IconSliderRight aria-label="IconSliderRight" className={s.iconSlider} />
                                                </svg>
                                        </button>
                                        <FsLightbox
                                            toggler={toggler}
                                            sources={product.images.map(i => i)}
                                        />
                                    <div className={s.priceBox}>
                                        <h2 className={s.priceTitle}><span className={s.price}>Ціна:</span> {product.price}</h2>
                                        {(product.available === 'true') ? <Available /> : <NotAvailable />}
                                        <div className={s.shortCharacteristic}>
                                            <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Тип: </span>{product.type}</p>
                                            <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вид: </span>{product.view}</p>
                                            <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Стать дитини: </span>{product.gender}</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 className={s.descriptionTitle}>Опис</h2>
                                <p className={s.description}>{product.description}</p>
                                <h2 className={s.characteristicTitle}>Характеристики</h2>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Тип: </span>{product.type}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вид: </span>{product.view}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Особливості: </span><p className={s.additionalFeatures}>{product.additionalFeatures}</p></p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Стать дитини: </span>{product.gender}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Комплектація: </span>{product.completeSet}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Тип елементів живлення: </span>{product.typeOfBatteries}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Кількість елементів живлення: </span>{product.numberOfBatteries}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Елементи живлення в комплекті: </span>{product.batteriesIncluded}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Колір: </span>{product.colour}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вік дитини: </span>{product.age}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Розмір &#40;без упаковки&#41;: </span>{product.dimensionsWithoutPackaging}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вага &#40;без упаковки&#41;: </span>{product.weightWithoutPackaging}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Розмір &#40;в упаковці&#41;: </span>{product.dimensionsPacked}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вага &#40;в упаковці&#41;: </span>{product.weightPacked}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Гарантія: </span>{product.warranty}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Матеріал: </span>{product.material}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Артикул: </span>{product.article}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Країна реєстрації бренду: </span>{product.countryOfBrandRegistration}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Країна-виробник товару: </span>{product.countryOfOrigin}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <Footer />
            </NavBar>
        </>
    )
}