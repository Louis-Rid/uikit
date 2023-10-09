import React from 'react';
import './button.css';
import '../assets/iconComponents/index';
import * as IconsLibrary from '../assets/iconComponents/index';
type Icon =
| "Download"
| "Play"
;

interface IconProps {
  dimensions: number;
}
interface ButtonProps {
  /**
   * What background color to use. optionel
   */
  backgroundColor?: "white" | "grey" | "green";
  /**
   * What background color to use. optionel
   */
  fontColor?: "white" | "black" | "green";
  /**
   * How large should the button be? optionel
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * if the button has an icon. required
   */
  hasIcon: boolean;
  /**
   * Position of icon. optionel
   */
  iconPos?: "start" | "end";
  /**
   * Icon symobol. optionel
   */
  iconName?: Icon;
  /**
   * Button content. required
   */
  label: string;
  /**
   * Optional click handler. optionel
   */
  handleClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'md',
  backgroundColor = "green",
  fontColor = "black",
  label,
  hasIcon = false,
  iconPos = "start",
  iconName = "Download",
  handleClick,
  ...props
}: ButtonProps) => {
  const classes: string = ['button', `button--${size}`, `button--${backgroundColor}`, `button--font-${fontColor}`, `button--${iconPos}`].join(' '); 
  var IconComponent = iconName && IconsLibrary[iconName] as React.FC<IconProps>;

  // Sets Icon size based on button size
  var iconSize;
  switch (size) {
    case "sm":
      iconSize = 16;
      break;
    case "md":
      iconSize = 24;
      break;
    case "lg":
      iconSize = 32;
      break;
    case "xl":
      iconSize = 40;
      break;
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      {...props}
    >
      <span className={classes}>
        <span className={`icon--wrapper ${!hasIcon ? "icon--hide" : ""}`}>{hasIcon && <IconComponent dimensions={iconSize}/>}</span>
        {label}
      </span>
      
    </button>
  );
};
