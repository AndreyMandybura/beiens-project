import { useRouter } from 'next/router';
import Image from 'next/image';
import { NavBar } from "../../../components/NavBar/NavBar";
import { Footer } from '../../../components/Footer/Footer';
import Link from "next/link";
import data from '../../../UrmywoProductsCatalogData.json';
import s from "../../../styles/Category.module.css"

export default function UrmywoCategory() {
    const router = useRouter()
    if (!router.isReady) return null;
    const categoryID = router.query.categoryID?.toString();

    return (
        <>
            <NavBar title={'Категорія'}>
                <div className={s.productListSection}>
                    <ul className={s.productList}>
                        {data.products.filter(p => p.categoryId.toString() === categoryID).map(product => (
                            <li className={s.productItem} key={product.id}>
                                <Link href={`/urmywocatalog/urmywoproduct/${product.id}`}>
                                    <a>
                                        <div className={s.productLink}>
                                            <div className={s.productImg}>
                                                <Image
                                                    src={product.images[0]}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    alt="Kids toys"
                                                />
                                            </div>
                                            <p className={s.productTitle}>{product.name}</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer />
            </NavBar>
        </>
    );
}