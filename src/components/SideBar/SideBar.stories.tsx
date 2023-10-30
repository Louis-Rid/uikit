import { StoryObj, Meta } from "@storybook/react";


import SideBar from "./SideBar";

const meta:Meta<typeof SideBar> = {
    title: "Page Elements/Side Bar",
    component: SideBar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    }
}


export default meta;
type Story = StoryObj<typeof meta>

export const Primary:Story = {};