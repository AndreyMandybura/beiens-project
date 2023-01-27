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
                                <h2>{product.name}</h2>
                                <div className={s.productImgBox}>
                                       <button onClick={() => setToggler(!toggler)}>
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
                                        <h3>Ціна: {product.price}</h3>
                                        {(product.available === 'true') ? <Available /> : <NotAvailable />}
                                    </div>
                                </div>
                                <h3>Опис</h3>
                                <p>{product.description}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <Footer />
            </NavBar>
        </>
    )
}