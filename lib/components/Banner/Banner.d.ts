import React from "react";
import "./banner.css";
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
declare const Banner: React.FC<BannerProps>;
export default Banner;
//# sourceMappingURL=Banner.d.ts.map