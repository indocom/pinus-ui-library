import React from "react";
import "./navbar.css";
declare type Content = {
    title: string;
    path: string;
    children: Content[];
};
export type { Content };
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
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
//# sourceMappingURL=Navbar.d.ts.map