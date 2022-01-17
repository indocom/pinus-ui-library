import React from "react";
import "./footer.css";
import Text from "../Text";

import logo from "../../images/pinus.png";
import Page from "../Page";

type Page = {
    title: string;
    link: string;
}

type Column = {
    title: string;
    pages: Page[];
}

export type {Page, Column}

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

const Footer: React.FC<FooterProps> = ({
  links,
  logoPath,
  logoTitle,
  rightSide,
  ...props
}) => {  
  logoPath = logoPath ? logoPath : logo;
  logoTitle = logoTitle ? logoTitle : <Text fontSize="4xl" fontWeight="bold" color="black"> PINUS </Text>
  rightSide = rightSide ? rightSide : 
    <div style={{backgroundColor: "black"}}>
      <Text color="white"> Put whatever you want here </Text>
    </div>
  return (
    <div className="footerWrapper">
      <div className="columnWrapper">
        <div className="footerLogoAndTitle">
          <img src={logoPath} className="footerLogo" />
          {logoTitle}
        </div>
        <Text color="gray">
          ©2021 Perhimpunan Indonesia NUS. All Rights Reserved.
        </Text>
      </div>
      <div className="rightSideWrapper">
        {links && 
        links.map((col:Column) => {
          return (
            <div className="linksWrapper">
              <Text fontWeight="bold"> {col.title} </Text>
              <p>&nbsp;</p>
              {col.pages.map((page: Page) => {
                return <a href={page.link} className="footerLink"> 
                  <Text color="black" fontSize="xs">
                    {page.title} 
                  </Text>
                </a>
              })}
            </div>
          );
        })}
        <div className="linksWrapper">
          {rightSide}
        </div>
      </div>
    </div>
  );
};

export default Footer;
