import { Meta } from "@storybook/react/types-6-0";
import Field from "./Field";

export default {
  title: "Common/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const GameField = () => <Field />;
