import React from "react";

import Button from "../Button";
import "../global.styles.css";
import "./header.css";
import logo from "../../images/pinus.png";
import Text from "../Text";

type header = {
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

const Header = ({
  logoPath,
  headerTitle,
  user,
  headers,
  homeLink,
  onLogin,
  onLogout,
  isLoginSupported = false,
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <a className="logoAndTitleWrapper" href={homeLink}>
        <div className="logoAndTitle">
          <img src={logoPath ? logoPath : logo} />
          <div className="title">
            {headerTitle}
          </div>
        </div>
      </a>
      <div className="header">
        {headers &&
          headers.map((header) => <a href={header.url}>{header.label}</a>)}
      </div>
      <div className="login">
        {isLoginSupported ? (
          user ? (
            <Button onClick={onLogout} label="Log out" variant="primary" />
          ) : (
            <Button onClick={onLogin} label="Log in" variant="primary" />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  </header>
);

export default Header;
