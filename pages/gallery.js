import { GalleryCollection } from "../components/GalleryCollection/GalleryCollection";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

export default function Gallery() {
    return (
        <>
            <NavBar title={"Галерея"}>
                <GalleryCollection />
                <Footer />
            </NavBar>
        </>
    )
}