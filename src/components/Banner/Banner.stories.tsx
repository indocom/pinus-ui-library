import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import background from "../../images/about.png";

import Banner from "./Banner";
import Text from "../Text";

export default {
  title: "Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

const subHeader = <div>
    <Text> Hihihi </Text>
    <Text> Hihihi </Text>
</div>;

export const WithSubHeader = Template.bind({});
WithSubHeader.args = {
  title: <Text fontWeight="bold" fontSize="5xl" color="white"> About Us </Text>,
  subHeader: subHeader,
  bgImage: background
};

export const WithoutSubHeader = Template.bind({});
WithoutSubHeader.args = {
  title: <Text fontWeight="bold" fontSize="5xl" color="white"> About Us </Text>,
  bgImage: background
};