import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../global.styles.css";
import Header from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const logoPath =
  "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg";

const title = "PINUS";
const headers = [
  {
    label: "home",
    url: "https://google.com",
  },
  {
    label: "events",
    url: "https://google.com",
  },
  {
    label: "about us",
    url: "https://google.com",
  },
  {
    label: "another header",
    url: "https://google.com",
  },
  {
    label: "very very long header",
    url: "https://google.com",
  },
];

export const Vanilla = Template.bind({});
Vanilla.args = {
  logoPath: logoPath,
  headerTitle: title,
  headers: headers,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  logoPath: logoPath,
  headerTitle: title,
  headers: headers,
  user: {},
  isLoginSupported: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  logoPath: logoPath,
  headerTitle: title,
  headers: headers,
  isLoginSupported: true,
};
