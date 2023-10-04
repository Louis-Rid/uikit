import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: "green",
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    backgroundColor: "grey",
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    backgroundColor: "white",
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
