/// <reference types="react" />
import "react-responsive-carousel/lib/styles/carousel.min.css";
export interface CarouselProps {
    /**
     * List of URLs to the images to be shown
     */
    imgList: string[];
    /**
     * Time spent on a single image
     */
    interval?: number;
    /**
     * Time spent moving to the next image
     */
    transitionTime?: number;
}
/**
 * UI Component for responsive carousel
 */
declare const Carousel: ({ interval, transitionTime, imgList }: CarouselProps) => JSX.Element;
export default Carousel;
//# sourceMappingURL=Carousel.d.ts.map