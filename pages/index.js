import { NavBar } from "../components/NavBar/NavBar";
import { Slider } from "../components/Slider/Slider";

export default function Home() {
    return (
        <>
            <NavBar title={"Головна"}>
                <h1>Main</h1>
                <Slider />
            </NavBar>
            
        </>
    )
}