import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import background from "../../images/about.png";

import Footer from "./Footer";
import Text from "../Text";

import { columns } from "./columns";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Example = Template.bind({});
Example.args = {
  links:columns,
};
