import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import { CategoryList } from '../../components/CategoryList/CategoryList';

export default function Catalog() {
    return (
        <>
            <NavBar title={"Каталог"}>
                <CategoryList />
                <Footer />
            </NavBar>
        </>
    )
}
