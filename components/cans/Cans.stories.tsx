import { Meta } from "@storybook/react/types-6-0";
import Cans from "./Cans";

export default {
  title: "Common/Cans",
  component: Cans,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const CanItems = () => <Cans />;
