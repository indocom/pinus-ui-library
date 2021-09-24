import React from "react";

import Button from "../Button";
import "./header.css";

type header = {
  label: string;
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
  headerTitle: string;

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
  onLogin,
  onLogout,
  isLoginSupported = false,
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div className="title">
        <img width="32" height="32" src={logoPath} />
        <h1>{headerTitle}</h1>
      </div>
      <div className="header">
        {headers.map((header) => (
          <a href={header.url}>{header.label}</a>
        ))}
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
