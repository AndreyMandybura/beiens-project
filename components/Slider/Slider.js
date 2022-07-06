import SimpleImageSlider from "react-simple-image-slider";
import useResizeObserver from "use-resize-observer";

export function Slider() {
    const images = [
  { url: "https://cdn.shopify.com/s/files/1/0398/1754/3838/files/4700x1800.webp?v=1654246999" },
  { url: "https://cdn.shopify.com/s/files/1/0398/1754/3838/files/banner4_tiny.jpg?v=1654247552" },
  { url: "https://cdn.shopify.com/s/files/1/0398/1754/3838/files/banner5_2ede5022-c6b1-41a9-ab81-6d979218e230.jpg?v=1654247460" },
    ];

    const { ref, width = 1, height = 1 } = useResizeObserver();
    
    return (
                <div ref={ref} style={{ width: "100%", height: "70vh" }}>
            <SimpleImageSlider 
                className="card_img"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                width={width}
                height={height}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={3.0}
            />
        </div>
    )
}