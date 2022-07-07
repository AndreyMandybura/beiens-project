import { NavBar } from "../components/NavBar/NavBar";
import { ImageCarousel } from "../components/Carousel/Carousel";

export default function Home() {
    return (
        <>
            <NavBar title={"Головна"}>
                <h1>Main</h1>
                <ImageCarousel />
            </NavBar>
            
        </>
    )
}