import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../../images/carouselImages/Img1.jpg'; 
import Img2 from '../../images/carouselImages/Img2.jpg'; 
import Img3 from '../../images/carouselImages/Img3.jpg'; 

export function ImageCarousel() {

    return (
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false} showThumbs={false}>
            <div>
                <Image src={Img1} alt="mother playing with child" />
            </div>
            <div>
                <Image src={Img2} alt="mother feeding the child" />
            </div>
            <div>
                <Image src={Img3} alt="mother teaching child" />
            </div>
        </Carousel>
    );
}