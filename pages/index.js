import { NavBar } from "../components/NavBar/NavBar";
import { ImageCarousel } from "../components/Carousel/Carousel";
import { Trendind } from "../components/Trendind/Trendind";
import { Benefits } from "../components/Benefits/Benefits";

export default function Home() {
    return (
        <>
            <NavBar title={"Головна"}>
                <h1>Main</h1>
                <ImageCarousel />
                <Trendind />
                <Benefits />
            </NavBar>
            
        </>
    )
}