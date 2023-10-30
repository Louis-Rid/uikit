import { Meta, StoryObj } from "@storybook/react";
import LibraryPlaylist from "./LibraryPlaylists";
import { data } from "../../API/apiCredentials.js";

var playlist = data.items[0];

const meta: Meta<typeof LibraryPlaylist> = {
    title: "Components/LibraryPlaylist",
    component: LibraryPlaylist,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div style={{ width: '80vw' }}>
                <Story />
            </div>
        )
    ]
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        title: playlist.name,
        subText: playlist.owner.display_name,
        numSongs: playlist.tracks.total,
        img: playlist.images[0].url,
        startingActiveState: true
    }
}

export const NonActive: Story = {
    args: {
        title: playlist.name,
        subText: playlist.owner.display_name,
        numSongs: playlist.tracks.total,
        img: playlist.images[0].url,
    }
}