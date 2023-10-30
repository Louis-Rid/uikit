import NavTabs from "../NavTabs/NavTabs";
import LibraryPlaylist from "../LibraryPlaylists/LibraryPlaylists";
import { data } from "../../API/apiCredentials.js";

import "./sideBar.css";

function SideBar() {
    var playlists = data.items;

    return <>
        <div className="sideBar--NavTabs">
            <NavTabs text={["Home", "Search"]} textColor="white" icons={["Home", "Search"]}/>
        </div>  
        
        <div className="sideBar--LibraryPlaylist">
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
    </>
}

export default SideBar;