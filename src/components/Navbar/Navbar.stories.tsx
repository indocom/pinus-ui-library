import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import background from "../../images/about.png";

import Navbar from "./Navbar";
import Text from "../Text";

import { contents } from "./contents";

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Example = Template.bind({});
Example.args = {
  contents: contents,
};