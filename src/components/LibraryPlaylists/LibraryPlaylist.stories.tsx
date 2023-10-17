import { Meta, StoryObj } from "@storybook/react";
import LibraryPlaylist from "./LibraryPlaylists";
import "/API/apiCredentials.js";

const meta: Meta<typeof LibraryPlaylist> = {
    title: "Components/LibraryPlaylist",
    component: LibraryPlaylist,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Primary",
        subText: "subtext",
    }
}