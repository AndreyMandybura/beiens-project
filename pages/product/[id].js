import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import data from '../../ProductsCatalogData.json';
import {Available} from '../../components/Available/Available';
import {NotAvailable} from '../../components/NotAvailable/NotAvailable';
import s from "../../styles/Product.module.css"

export default function Product() {
    const router = useRouter();
    return (
        <>
            <NavBar title={"Продукт"}>
                <div className={s.productSection}>
                    <ul>
                        {data.products.filter(p => router.query.id === p.id).map(product => 
                            <li key={product.id}>
                                <h2>{product.name}</h2>
                                <div className={s.productImgBox}>
                                    <div className={s.productImg}>
                                        <Image
                                        src={product.img1}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Kids toys"
                                        />
                                    </div>
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