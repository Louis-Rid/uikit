import NavTabs from "../NavTabs/NavTabs";
import LibraryPlaylist from "../LibraryPlaylists/LibraryPlaylists";
import { Button } from "../Button/Button";
import { data } from "../../API/apiCredentials.js";

import "./sideBar.css";


function SideBar() {
    var playlists = data.items;

    return (
    <div className="sideBar--wrapper">
        {/* Home and Search tabs */}
        <div className="sideBar--NavTabs">
            <NavTabs text={["Home", "Search"]} textColor="white" icons={["Home", "Search"]}/>
        </div>  
        

        {/* Library */}
        <div className="sideBar--Library">
            <div className="sideBar--libraryHeader">
            <Button
                backgroundColor="transparent"
                fontColor="white"
                hasIcon
                iconName="Library"
                label="Your Library"
                labelLoc="start"
            />
            <Button
                backgroundColor="transparent"
                fontColor="white"
                hasIcon
                iconName="Plus"
                label=""
                labelLoc="center"
                size="sm"
            />
            <Button
                backgroundColor="transparent"
                fontColor="white"
                hasIcon
                iconName="Arrow"
                label=""
                labelLoc="center"
                size="sm"
            />
            </div>

            {/* Displays Library Elements*/}
            {
                playlists.map((value: { name: string; owner: { display_name: string; }; tracks: { total: string; }; images: { url: string; }[]; }) => {
                    return (
                        <LibraryPlaylist
                        title={value.name}
                        subText={value.owner.display_name}
                        numSongs={value.tracks.total}
                        img={value.images[0].url}
                        startingActiveState={false}
                        />
                    )
                })
            }
        </div>
    </div>
    )
}

export default SideBar;