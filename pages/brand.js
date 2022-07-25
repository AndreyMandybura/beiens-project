import { BrandStory } from "../components/BrandStory/BrandStory";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";

export default function Brand() {
    return (
        <>
            <NavBar title={"Про бренд"}>
                <BrandStory />
                <Footer />
            </NavBar>
        </>
    )
}