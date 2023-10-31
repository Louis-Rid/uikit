import React from "react";
import "./button.css";
import "../../assets/iconComponents/index";
import * as IconsLibrary from "../../assets/iconComponents/index";
type Icon =
  | "Download"
  | "Play"
  | "Search"
  | "Home"
  | "Library"
  | "Plus"
  | "Arrow";

interface IconProps {
  dimensions: number;
}
interface ButtonProps {
  /**
   * What background color to use. Optionel
   */
  backgroundColor?: "white" | "black" | "green" | "transparent";
  /**
   * What background color to use. Optionel
   */
  fontColor?: "white" | "black" | "green";
  /**
   * How large should the button be? Optionel
   */
  size?: "sm" | "md" | "lg" | "xl" | "full-width";
  /**
   * if the button has an icon. required
   */
  hasIcon: boolean;
  /**
   * Position of icon. Optionel
   */
  iconPos?: "start" | "end";
  /**
   * Icon symobol. Optionel
   */
  iconName?: Icon;
  /**
   * Button content. Optionel
   */
  label?: string;
  /**
   * Location of label. Optionel
   */
  labelLoc?: "start" | "center" | "end";
  /**
  /**
   * Click handler. Optionel
   */
  handleClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "md",
  backgroundColor = "green",
  fontColor = "black",
  label,
  labelLoc = "center",
  hasIcon = false,
  iconPos = "start",
  iconName = "Download",
  handleClick,
  ...props
}: ButtonProps) => {
  // Classes for the span element inside the button
  const classes: string = [
    "button",
    `button--${size}`,
    `button--${backgroundColor}`,
    `button--font-${fontColor}`,
    `button--label-${labelLoc}`,
    label ? `button--${iconPos}` : "",
    !label ? `button--${size}-noLabel` : "",
  ].join(" ");

  // Creates a component for the icon
  var IconComponent =
    iconName && (IconsLibrary[iconName] as React.FC<IconProps>);

  // Sets Icon size based on button size
  var iconSize;
  switch (size) {
    case "sm":
      iconSize = 16;
      break;
    case "md":
      iconSize = 24;
      break;
    case "full-width":
      iconSize = 24;
      break;
    case "lg":
      iconSize = 32;
      break;
    case "xl":
      iconSize = 40;
      break;
  }

  // Returned Button Component
  return (
    <button
      type="button"
      onClick={handleClick}
      {...props}
      className={size === "full-width" ? "button--full-width" : ""}
    >
      <span className={classes}>
        <span className={`icon--wrapper${!hasIcon ? ", hide" : ""}`}>
          {hasIcon && <IconComponent dimensions={iconSize} />}
        </span>
        <span className={!label ? "hide" : ""}>{label}</span>
      </span>
    </button>
  );
};
