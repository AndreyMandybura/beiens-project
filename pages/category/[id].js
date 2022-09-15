import { useRouter } from 'next/router';
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import Link from "next/link";
import data from '../../ProductsCatalogData.json';

export default function Category() {
    const router = useRouter()
    return (
        <>
            <NavBar title={'Категорія'}>
                    <h1>category {router.query.id}</h1>
                    <ul>
                        {data.products.filter(p => router.query.id === p.categoryId).map(product => 
                            <li key={product.id}>
                                <Link href={`/product/[id]`} as={`/product/${product.id}`}>
                                    <a>
                                        {product.name}
                                    </a>
                                </Link>
                            </li>
                        )}
                    </ul>
                <Footer />
            </NavBar>
        </>
    )
}