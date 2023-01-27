import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import data from '../../ProductsCatalogData.json';
import {Available} from '../../components/Available/Available';
import {NotAvailable} from '../../components/NotAvailable/NotAvailable';
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
                                        </button>
                                        <FsLightbox
                                            toggler={toggler}
                                            sources={product.images.map(i => i)}
                                        />
                                    <div className={s.priceBox}>
                                        <h2 className={s.priceTitle}>Ціна: {product.price}</h2>
                                        {(product.available === 'true') ? <Available /> : <NotAvailable />}
                                    </div>
                                </div>
                                <h2 className={s.description}>Опис</h2>
                                <p className={s.characteristic}>{product.description}</p>
                                <h2 className={s.description}>Характеристики</h2>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Тип: </span>{product.type}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вид: </span>{product.view}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Додаткові характеристики: </span>{product.additionalFeatures}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Стать дитини: </span>{product.gender}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Комплектація: </span>{product.completeSet}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Тип елементів живлення: </span>{product.typeOfBatteries}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Кількість елементів живлення: </span>{product.numberOfBatteries}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Елементи живлення в комплекті: </span>{product.batteriesIncluded}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Колір: </span>{product.colour}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вік дитини: </span>{product.age}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Розмір &quot;без упаковки&quot;: </span>{product.dimensionsWithoutPackaging}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вага &quot;без упаковки&quot;: </span>{product.weightWithoutPackaging}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Розмір &quot;в упаковці&quot;: </span>{product.dimensionsPacked}</p>
                                <p className={s.characteristic}><span className={s.productCharacteristicTitle}>Вага &quot;в упаковці&quot;: </span>{product.weightPacked}</p>
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