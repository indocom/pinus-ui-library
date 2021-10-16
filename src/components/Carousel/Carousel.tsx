import React from "react";
import {Carousel as ReactCarousel}  from 'react-responsive-carousel';
import { arrowStyles, indicatorStyles, arrow, left, right} from "./myCarouselCSS";

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
const Carousel = ({
  interval= 5000,
  transitionTime= 1000,
  imgList
}: CarouselProps) => {

  const prevArrow = (
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
    hasPrev: boolean, 
    label: string
  ) => {
    return hasPrev && 
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{ ...arrowStyles, left: 15 }}
    >
      <i style={{...arrow, ...left}}/>
    </button>
  }

  const nextArrow = (
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
    hasNext: boolean, 
    label: string
  ) => {
    return hasNext && 
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{ ...arrowStyles, right: 15 }}
    >
      <i style={{...arrow, ...right}}/>
    </button>
  }

  const indicator = (
    onClickHandler: React.MouseEventHandler<HTMLLIElement>,
    isSelected: boolean,
    index: number,
    label: string) =>  {
    return isSelected
    ? (
      <li
        style = {{...indicatorStyles, background: "#FF1313"}}
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
      
      interval={interval}
      transitionTime={transitionTime}
      showThumbs={false}
      renderArrowPrev={prevArrow}
      renderArrowNext={nextArrow}
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
