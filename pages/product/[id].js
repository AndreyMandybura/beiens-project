import { useRouter } from 'next/router';
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import data from '../../ProductsCatalogData.json';

export default function Product() {
    const router = useRouter()
    return (
        <>
            <NavBar title={"Продукт"}>
                <h1>Product {router.query.id}</h1>
                    {data.products.filter(p => router.query.id === p.id).map(product => 
                        <ul key={product.id}>
                            <li >
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                            </li>
                        </ul>
                    )}
                <Footer />
            </NavBar>
        </>
    )
}