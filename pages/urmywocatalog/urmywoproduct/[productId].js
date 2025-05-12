import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { NavBar } from "../../../components/NavBar/NavBar";
import { Footer } from '../../../components/Footer/Footer';
import data from '../../../UrmywoProductsCatalogData.json';
import { Available } from '../../../components/Available/Available';
import { NotAvailable } from '../../../components/NotAvailable/NotAvailable';
import IconSliderRight from "../../../images/svg/icon_slider_right.svg";
import IconSliderLeft from "../../../images/svg/icon_slider_left.svg";
import s from "../../../styles/Product.module.css";

export default function UrmywoProduct() {
    const router = useRouter();
    const [toggler, setToggler] = useState(false);

    if (!router.isReady) return null;

    const productId = router.query.productId?.toString();
    const product = data.products.find(p => p.id === productId);

    if (!product) return <p>Продукт не знайдено</p>;

    return (
        <>
            <NavBar title={"Продукт"}>
                <div className={s.productSection}>
                    <h1 className={s.productTitle}>{product.name}</h1>
                    <div className={s.productImgBox}>
                        <button onClick={() => setToggler(!toggler)} className={s.productButton}>
                            <div className={s.productImg}>
                                <Image
                                    src={product.images[0]}
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

                        <FsLightbox toggler={toggler} sources={product.images} />

                        <div className={s.priceBox}>
                            <h2 className={s.priceTitle}>
                                <span className={s.price}>Ціна:</span> {product.price}
                            </h2>
                            {product.available === 'true' ? <Available /> : <NotAvailable />}
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
                    <div className={s.characteristics}>
                        <p><span className={s.productCharacteristicTitle}>Тип: </span>{product.type}</p>
                        <p><span className={s.productCharacteristicTitle}>Вид: </span>{product.view}</p>
                        <p><span className={s.productCharacteristicTitle}>Особливості: </span><span className={s.additionalFeatures}>{product.additionalFeatures}</span></p>
                        <p><span className={s.productCharacteristicTitle}>Стать дитини: </span>{product.gender}</p>
                        <p><span className={s.productCharacteristicTitle}>Комплектація: </span>{product.completeSet}</p>
                        <p><span className={s.productCharacteristicTitle}>Тип елементів живлення: </span>{product.typeOfBatteries}</p>
                        <p><span className={s.productCharacteristicTitle}>Кількість елементів живлення: </span>{product.numberOfBatteries}</p>
                        <p><span className={s.productCharacteristicTitle}>Елементи живлення в комплекті: </span>{product.batteriesIncluded}</p>
                        <p><span className={s.productCharacteristicTitle}>Колір: </span>{product.colour}</p>
                        <p><span className={s.productCharacteristicTitle}>Вік дитини: </span>{product.age}</p>
                        <p><span className={s.productCharacteristicTitle}>Розмір (без упаковки): </span>{product.dimensionsWithoutPackaging}</p>
                        <p><span className={s.productCharacteristicTitle}>Вага (без упаковки): </span>{product.weightWithoutPackaging}</p>
                        <p><span className={s.productCharacteristicTitle}>Розмір (в упаковці): </span>{product.dimensionsPacked}</p>
                        <p><span className={s.productCharacteristicTitle}>Вага (в упаковці): </span>{product.weightPacked}</p>
                        <p><span className={s.productCharacteristicTitle}>Гарантія: </span>{product.warranty}</p>
                        <p><span className={s.productCharacteristicTitle}>Матеріал: </span>{product.material}</p>
                        <p><span className={s.productCharacteristicTitle}>Артикул: </span>{product.article}</p>
                        <p><span className={s.productCharacteristicTitle}>Країна реєстрації бренду: </span>{product.countryOfBrandRegistration}</p>
                        <p><span className={s.productCharacteristicTitle}>Країна-виробник товару: </span>{product.countryOfOrigin}</p>
                    </div>
                </div>
                <Footer />
            </NavBar>
        </>
    );
}