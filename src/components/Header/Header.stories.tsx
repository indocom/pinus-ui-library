import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../global.styles.css";
import Header from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const title = "PINUS";
const homeLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
  headerTitle: title,
  headers: headers,
  homeLink: homeLink,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  headerTitle: title,
  headers: headers,
  homeLink: homeLink,
  user: {},
  isLoginSupported: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  headerTitle: title,
  headers: headers,
  homeLink: homeLink,
  isLoginSupported: true,
};
