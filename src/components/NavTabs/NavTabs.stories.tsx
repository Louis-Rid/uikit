import { Meta, StoryObj} from "@storybook/react";

import NavTabs from "./NavTabs";

const meta: Meta<typeof NavTabs> = {
    title: "NavTabs",
    component: NavTabs,
    parameters: {
        layout: 'centered',
      },
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
}