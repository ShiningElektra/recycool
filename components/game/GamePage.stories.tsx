import { Meta } from "@storybook/react/types-6-0";
import GamePage from "./GamePage";

export default {
  title: "Common/GamePage",
  component: GamePage,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Game = () => <GamePage />;
