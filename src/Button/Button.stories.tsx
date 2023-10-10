import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
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
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    backgroundColor: "green",
    fontColor: "white",
    hasIcon: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    backgroundColor: "grey",
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
    backgroundColor: "white",
    fontColor: "black"
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'sm',
  },
};
