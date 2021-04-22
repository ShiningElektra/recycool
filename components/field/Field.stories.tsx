import { Meta, Story } from "@storybook/react/types-6-0";
import Field from "./Field";
import { APIWaste } from "../../utils/api";

export default {
  title: "Common/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<APIWaste> = (args) => <Field {...args} />;
export const GameField = Template.bind({});
GameField.args = {
  id: "1301",
  type: "canpaper",
  imageSrc: "/residual_01.png",
  score: 1,
};
