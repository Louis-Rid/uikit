import { Meta, StoryObj, StoryFn } from "@storybook/react";

import NavTabs from "./NavTabs";

const meta: Meta<typeof NavTabs> = {
  title: "Components/NavTabs",
  component: NavTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <div className="navTabs--wrapper">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: ["home", "search"],
    textColor: "white",
    icons: ["Home", "Search"],
  },
};
