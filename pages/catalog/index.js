import { NavBar } from "../../components/NavBar/NavBar";
import { CategoryList } from "../../components/CategoryList/CategoryList"

export default function Catalog() {
    return (
        <>
            <NavBar title={"Каталог"}>
                <CategoryList />
            </NavBar>
        </>
    )
}