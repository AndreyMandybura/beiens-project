import { NavBar } from "../components/NavBar/NavBar";
import { ImageCarousel } from "../components/Carousel/Carousel";
import { Trendind } from "../components/Trendind/Trendind";
import { Benefits } from "../components/Benefits/Benefits";
import { Banner } from "../components/Banner/Banner";
import { Gallery } from "../components/Gallery/Gallery";

export default function Home() {
    return (
        <>
            <NavBar title={"Головна"}>
                <ImageCarousel />
                <Trendind />
                <Benefits />
                <Banner />
                <Gallery />
            </NavBar>
            
        </>
    )
}