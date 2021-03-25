import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Burger from "../burger/Burger";
import { BurgerProps } from "../burger/Burger";

export default {
  title: "Common/Burger",
  component: Burger,
} as Meta;

const Template: Story<BurgerProps> = (args) => <Burger {...args} />;

export const Closed = Template.bind({});
Closed.args = { open: false };

export const Open = Template.bind({});
Open.args = { open: true };
