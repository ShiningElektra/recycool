import { Meta } from "@storybook/react/types-6-0";
import Welcome from "./Welcome";

export default {
  title: "Common/Welcome",
  component: Welcome,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const WelcomePage = () => <Welcome />;
