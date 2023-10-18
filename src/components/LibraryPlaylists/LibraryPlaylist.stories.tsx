import { Meta, StoryObj } from "@storybook/react";
import LibraryPlaylist from "./LibraryPlaylists";
import { data } from "../../API/apiCredentials.js";

console.log(data);
var playlist = data.items[0];

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
        title: playlist.name,
        subText: playlist.owner.display_name,
        img: playlist.images[0].url,
    }
}