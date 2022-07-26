import { NavBar } from "../components/NavBar/NavBar";
import { FatumContacts } from "../components/FatumContacts/FatumContacts";
import { Footer } from "../components/Footer/Footer";

export default function Contacts() {
    return (
        <>
            <NavBar title={"Контакти"}>
                <FatumContacts />
                <Footer />
            </NavBar>
        </>
    )
}