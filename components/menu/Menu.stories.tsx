import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Menu from "./Menu";
// import { MenuProps } from "../menu/Menu";

export default {
  title: "Common/Menu",
  component: Menu,
} as Meta;

const Template: Story = (args) => <Menu {...args} />;

export const Open = Template.bind({});
Open.args = {};
