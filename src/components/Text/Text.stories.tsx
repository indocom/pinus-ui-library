import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

export default {
  title: "Component/Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Header = Template.bind({});
Header.args = {
  variant: "header",
};

export const SubHeader = Template.bind({});
SubHeader.args = {
  variant: "subheader",
};

export const Body = Template.bind({});
Body.args = {
  variant: "body",
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: "body-small",
};

export const SubText = Template.bind({});
SubText.args = {
  variant: "subtext",
};

export const HeaderAlt = Template.bind({});
HeaderAlt.args = {
  variant: "header-alt",
};

export const SubHeaderAlt = Template.bind({});
SubHeaderAlt.args = {
  variant: "subheader-alt",
};

export const BodyAlt = Template.bind({});
BodyAlt.args = {
  variant: "body-alt",
};

export const SubTextAlt = Template.bind({});
SubTextAlt.args = {
  variant: "subtext-alt",
};
