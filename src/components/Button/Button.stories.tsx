import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
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
    (Story: StoryFn) => 
    (
      <div className="button--wrapper">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    size: "md",
    backgroundColor: "white",
    fontColor: "black",
    hasIcon: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "Secondary",
    backgroundColor: "black",
    fontColor: "white",
  },
};

export const CTA: Story = {
  name: "Call To Action",
  args: {
    ...Primary.args,
    label: "CTA",
    backgroundColor: "green",
    fontColor: "black",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    label: "Small",
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    label: "Medium",
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    label: "Large",
    size: 'lg',
  },
};

export const HasIcon: Story = {
  args: {
    ...Primary.args,
    label: "Has Icon",
    hasIcon: true,
    iconName: "Download"
  }
}

export const IconNoLabel: Story = {
  name: "Has Icon w/ No Label",
  args: {
    ...HasIcon.args,
    label: "",
    iconName: "Play",
    backgroundColor: "green",
  }
}




