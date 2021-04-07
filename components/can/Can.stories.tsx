import { Meta } from "@storybook/react/types-6-0";
import Can from "./Can";

export default {
  title: "Common/Can",
  component: Can,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const CanItem = () => <Can />;
