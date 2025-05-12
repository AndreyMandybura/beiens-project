import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import { UrmywoCategoryList } from '../../components/UrmywoCategoryList/UrmywoCategoryList';

export default function UrmywoCatalog() {
    return (
        <>
            <NavBar title={"Каталог Urmywo"}>
                <UrmywoCategoryList />
                <Footer />
            </NavBar>
        </>
    )
}