import React, { useState } from "react";
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
  /**
   * If the current playlist is active.
   */
  startingActiveState: boolean;
}

const LibraryPlaylist = ({
  img,
  pinned = false,
  title,
  subText,
  numSongs,
  startingActiveState = false,
  ...props
}: LpProps) => {
  const [active, setActive] = useState(startingActiveState);
  const handleClick = () => {
    setActive(true);
  };

  var bgColor = active ? "gray" : "clear";

  return (
    <>
      <div
        className={`Lp--wrapper Lp--wrapper-${bgColor}`}
        onClick={handleClick}
      >
        <img src={img} />
        <div className="Lp--text">
          <p>{title}</p>
          <p className="Lp--subText">
            {subText} • {numSongs}
          </p>
        </div>
      </div>
    </>
  );
};

export default LibraryPlaylist;
