import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import data from '../../ProductsCatalogData.json';
import Link from "next/link";

export default function Catalog() {
    return (
        <>
            <NavBar title={"Каталог"}>
                <ul>
                    {data.categories.map(category =>
                        <li key={category.id}>
                            <Link href={`/category/[id]`} as={`/category/${category.id}`}>
                                <a>
                                    {category.name}
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
