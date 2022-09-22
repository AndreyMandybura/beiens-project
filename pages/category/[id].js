import { useRouter } from 'next/router';
import Image from 'next/image';
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import Link from "next/link";
import data from '../../ProductsCatalogData.json';
import s from "../../styles/Category.module.css"

export default function Category() {
    const router = useRouter()
    return (
        <>
            <NavBar title={'Категорія'}>
                <div className={s.productListSection}>
                    <ul className={s.productList}>
                        {data.products.filter(p => router.query.id === p.categoryId).map(product => 
                            <li className={s.productItem} key={product.id}>
                                <Link href={`/product/[id]`} as={`/product/${product.id}`}>
                                    <a>
                                        <div className={s.productLink}>
                                            <div className={s.productImg}>
                                                <Image
                                                src={product.img1}
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
                        )}
                    </ul>
                </div>
                <Footer />
            </NavBar>
        </>
    )
}