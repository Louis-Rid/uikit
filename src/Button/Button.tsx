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
   * Is this the principal call to action on the page?. optionel
   */
  primary?: boolean;
  /**
   * What background color to use. optionel
   */
  backgroundColor?: "white" | "grey" | "green";
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
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'md',
  backgroundColor = "green",
  label,
  hasIcon = false,
  iconPos = "start",
  iconName = "Download",
  ...props
}: ButtonProps) => {
  const mode: string = primary ? 'button--primary' : 'button--secondary';
  const classes: string = ['button', `button--${size}`, `button--${backgroundColor}`, `button--${iconPos}`, mode].join(' '); 
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
      {...props}
    >
      <span className={classes}>
        <span className={`icon--wrapper ${!hasIcon ? "icon--hide" : ""}`}>{hasIcon && <IconComponent dimensions={iconSize}/>}</span>
        {label}
      </span>
      
    </button>
  );
};
