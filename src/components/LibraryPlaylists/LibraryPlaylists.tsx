import React from "react";
import "./libraryplaylist.css";

interface LpProps {
    /**
     * Image of Thumbnail.
     */
    img: string;
    /**
     * Bool if playlist is pinned.
     */
    pinned?: boolean;
    /**
     * Title for playlist
     */
    title: string;
    /**
     * Text below title
     */
    subText: string;
    /**
     * Number of songs in playlist.
     */
    numSongs: string;
}

const LibraryPlaylist = ({
    img,
    pinned = false,
    title,
    subText,
    numSongs,
    ...props
}: LpProps) => {
    return <>
    <div className="Lp--wrapper">
        <img src={img}/>
        <div className="Lp--text">
            <p>{title}</p>
            <p className="Lp--subText">{subText} •  {numSongs}</p>
        </div>
    </div>
    </>
}

export default LibraryPlaylist;