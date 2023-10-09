import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hasIcon: {control: "boolean"},
    iconName: {control: "select", if: {arg: "hasIcon"}},
    iconPos: {control: "select", if: { arg: "hasIcon"}}
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    backgroundColor: "green",
    hasIcon: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    backgroundColor: "grey",
    hasIcon: false,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
    backgroundColor: "white",
    hasIcon: false,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
    hasIcon: false,
  },
};
