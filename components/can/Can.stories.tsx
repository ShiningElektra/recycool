import { Meta, Story } from "@storybook/react/types-6-0";
import Can, { CanProps } from "./Can";

export default {
  title: "Common/Can",
  component: Can,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<CanProps> = (args) => <Can {...args} />;
export const CanItem = Template.bind({});
CanItem.args = {
  type: "paper",
  className: "canpaper",
};
