import React from "react";
import "./navtabs.css";

import { Button } from "../Button/Button";

type Icon =
| "Download"
| "Play"
| "Home"
| "Search"
;

interface NavTabsProps {
    /** 
     * Array of text for tabs.
    */
   text: string[];
   /**
    * Color of text
    */
   textColor?: "white" | "black" | "green";
   /**
    * Array of the names of icons for text. The icons will be matched with the associated index in the text array.
    */
   icons?: Icon[];
}

const NavTabs = ({
    text,
    textColor,
    icons = [],
    ...props
}: NavTabsProps) => {

    return <>
    <div>
        {text.map((val, index) => {
            return <Button label={val} backgroundColor="transparent" fontColor={textColor} hasIcon={true} iconName={icons[index]}/>
        })}
    </div>
    </>
}

export default NavTabs;