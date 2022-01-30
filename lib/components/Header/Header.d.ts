/// <reference types="react" />
import "../global.styles.css";
import "./header.css";
declare type header = {
    label: JSX.Element;
    url: string;
};
export interface HeaderProps {
    /**
     * Path to the logo image (image would be compressed to 32px x 32px logo)
     */
    logoPath?: string;
    /**
     * Header title
     */
    headerTitle: JSX.Element;
    /**
     * Home Link
     */
    homeLink: string;
    /**
     * list of headers including label and url when being clicked,
     * recommended up to 5 headers for small laptop as otherwise the text would be like a paragraph
     */
    headers: header[];
    /**
     * If login is supported
     */
    isLoginSupported: boolean;
    /**
     * User to be supplied in any format
     */
    user?: any;
    /**
     * Action to be performed when log in button is pressed
     */
    onLogin?: () => void;
    /**
     * Action to be performed when log out button is pressed
     */
    onLogout?: () => void;
}
declare const Header: ({ logoPath, headerTitle, user, headers, homeLink, onLogin, onLogout, isLoginSupported, }: HeaderProps) => JSX.Element;
export default Header;
//# sourceMappingURL=Header.d.ts.map