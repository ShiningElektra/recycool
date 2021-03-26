import { Meta } from "@storybook/react/types-6-0";
import IndexHG from "./IndexHG";

export default {
  title: "Common/IndexHG",
  component: IndexHG,
} as Meta;

export const HG = () => <IndexHG />;

// const Template: Story = (args) => <IndexHG {...args} />;

// export const HG = Template.bind({});
// HG.args = { };
