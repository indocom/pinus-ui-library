import React from "react";
import "./banner.css";
import background from "../../images/gradient.png";

export interface BannerProps {
  /**
   * Path of background image.
   */
  bgImage?: string;

  /**
   * Title of the page.
   */
  title?: React.ReactNode;

  /**
   * Subheader of the page.
   */
  subHeader?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
  bgImage,
  title,
  subHeader = null,
  ...props
}) => {  
  bgImage = bgImage ? bgImage : background;
  return (
    <div className={`banner--wrapper`}>
        <img className="banner--backgroundImage" src={bgImage}/>
        <div className="banner--title">
            {title}
        </div>
        {subHeader != null && 
            <div className="banner--subheader">
                {subHeader}
            </div>
        }
        
    </div>
  );
};

export default Banner;
