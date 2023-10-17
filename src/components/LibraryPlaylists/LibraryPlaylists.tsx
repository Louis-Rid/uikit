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
}

const LibraryPlaylist = ({
    img,
    pinned = false,
    title,
    subText,
    ...props
}: LpProps) => {
    return <>
    <div>
        <img src={img}/>
        <div>
            <p>{title}</p>
            <p>{subText}</p>
        </div>
    </div>
    </>
}

export default LibraryPlaylist;