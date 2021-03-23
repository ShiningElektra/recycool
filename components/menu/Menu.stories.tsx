import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Menu, { MenuProps } from "./Menu";

export default {
  title: "Common/Menu",
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Open = Template.bind({});
Open.args = { open: true };

export const Closed = Template.bind({});
Closed.args = { open: false };
