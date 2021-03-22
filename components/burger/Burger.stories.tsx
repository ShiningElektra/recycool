import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Burger from "../burger/Burger";
// import { BurgerProps } from "../burger/Burger";

export default {
  title: "Common/BurgerMenu",
  component: Burger,
} as Meta;

const Template: Story = (args) => <Burger {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
