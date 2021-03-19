import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Display, { DisplayProps } from "./Display";

export default {
  title: "Common/Display",
  component: Display,
} as Meta;

const Template: Story<DisplayProps> = (args) => <Display {...args} />;

export const Score = Template.bind({});
Score.args = {
  primary: true,
  value: 101,
};
export const Time = Template.bind({});
Time.args = {
  primary: false,
  value: "00:35",
};
