import React from "react";
import "./contentCard.css";

// TODO: support variant

export interface ContentCardProps {
  /**
   * Title of ContentCard
   */
  title: string;

  /**
   * Description of ContentCard
   */
  description: string;

  /**
   * Link to full content referenced by ContentCard
   */
  hyperlink: string;

  /**
   * Relative path to image 
   */
  image?: string;

  /**
   * Alt text for image. Compulsory field if image field is present
   */
  imgAlt?: string;

  /**
   * Relative path to bgImage 
   */
  bgImage?: string;

  drawBorder?: boolean;
}

const ContentCard = ({
  image,
  imgAlt,
  title,
  description,
  hyperlink,
  bgImage,
  drawBorder = false
}: ContentCardProps) => {
  return (
    <div
    className={'contentCard'}
    style={{backgroundImage: `url(${bgImage})`}}
    >
      <div className={'image'}>
      {
        image
        ? <img src={image} alt={imgAlt}/>
        : <></>
      }
      </div>
      <div className={'title'}>
        {title}
      </div>
      <div className={'description'}>
        {description}
      </div>
      <div className={'hyperlink'}>
        <a href={hyperlink}>{"Read More >>>"}</a>
      </div>
    </div>
  )
}

export default ContentCard;