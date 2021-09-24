import React, {CSSProperties} from "react";
import {Carousel as ReactCarousel}  from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./myCarousel.css";

export interface CarouselProps {
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
const Carousel = ({
  interval= 5000,
  transitionTime= 1000,
  imgList
}: CarouselProps) => {

  const indicatorStyles: CSSProperties = {
    background: "#000",
    display: "inline-block",
    width: "8px",
    height:"8px",
    margin: "0 8px",
    listStyle: "circle"
  };

  const indicator = (
    onClickHandler: React.MouseEventHandler<HTMLLIElement>,
    isSelected: boolean,
    index: number,
    label: string) =>  {
    return isSelected
    ? (
      <li
        style = {{...indicatorStyles, background: "#fff"}}
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    ) 
    : (
      <li
        style = {indicatorStyles}
        value={index}
        key={index}
        role="button"
        onClick={onClickHandler}
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    )
  };

  return (
      <ReactCarousel
      autoPlay
      infiniteLoop
      swipeable
      emulateTouch
      centerMode
      
      interval={interval}
      transitionTime={transitionTime}
      showArrows={false}
      showThumbs={false}
      renderIndicator={indicator}
      >
        {imgList.map((src, id) => {
          return (
            <div key={id}>
              <img src={src} />
            </div>
          )
        })}
      </ReactCarousel>
  );
};

export default Carousel;
