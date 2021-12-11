import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../global.styles.css";
import Header from "./Header";
import Text from "../Text";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const title = <Text fontWeight="bold" fontSize="4xl">PINUS</Text>;
const homeLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
const headers = [
  {
    label: <Text> home </Text>,
    url: "https://google.com",
  },
  {
    label: <Text> events </Text>,
    url: "https://google.com",
  },
  {
    label: <Text> about us </Text>,
    url: "https://google.com",
  },
  {
    label: <Text> another header </Text>,
    url: "https://google.com",
  },
  {
    label: <Text> very very long header </Text>,
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
