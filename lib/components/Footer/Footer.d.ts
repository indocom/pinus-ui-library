import React from "react";
import "./footer.css";
import Page from "../Page";
declare type Page = {
    title: string;
    link: string;
};
declare type Column = {
    title: string;
    pages: Page[];
};
export type { Page, Column };
export interface FooterProps {
    /**
     * The links to different pages
     */
    links?: Column[];
    /**
     * Path to the logo image (image would be compressed to 32px x 32px logo)
     */
    logoPath?: string;
    /**
     * logoTitle
     */
    logoTitle?: JSX.Element;
    /**
     * the right side of the footer
     */
    rightSide?: JSX.Element;
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
//# sourceMappingURL=Footer.d.ts.map