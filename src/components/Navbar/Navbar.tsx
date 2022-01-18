import React from "react";
import "./navbar.css";
import Text from "../Text";

type Content = {
    title: string;
    path: string;
    children: Content[];
}

export type {Content}

export interface NavbarProps {
  /**
   * The contents of the navbar
   */
  contents?: Content[];

  /**
   * The color of the texts
   */
  color?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  contents,
  color,
  ...props
}) => {  
    function renderContents(contents: Content[], level: number) {
        if (contents.length === 0) {
            return <div></div>
        }
        return contents.map(content => {
            if (level === 0) {
                return (
                    <div className="navbarHeading">
                        <a href={content.path}>
                            <Text fontSize="3xl" fontWeight="bold" color={color}> {content.title} </Text>
                        </a>
                        {renderContents(content.children, level + 1)}
                    </div>
                );
            } else {
                const numberOfTabs = level - 1;
                const tabs = Array(numberOfTabs * 4).fill('\xa0').join('');
                console.log(tabs);
                return (
                    <div>
                        <a>{tabs}</a>
                        <a href={content.path} className="navbarLink">
                            <Text fontSize="lg" color={color} display="inline">{tabs} {content.title} </Text>
                        </a>
                        {renderContents(content.children, level + 1)}
                    </div>
                );
            }
        });
    }
    return (
        <div>
            {renderContents(contents!, 0)}
        </div>
    )
};

export default Navbar;
