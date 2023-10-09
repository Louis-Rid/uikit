import React from 'react';
import './button.css';
import '../assets/iconComponents/index';
import * as IconsLibrary from '../assets/iconComponents/index';
type Icon =
| "Download"
| "Play"
;

interface IconProps {
  iconHeight: number;
  iconWidth: number
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
  size?: 'small' | 'medium' | 'large';
  /**
   * if the button has an icon. required
   */
  hasIcon: boolean;
  /**
   * Position of icon. optionel
   */
  iconPos?: "start" | "end";
  /**
   * Position of icon. optionel
   */
  iconSize?: 16 | 21 | 32 | 56;
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
  size = 'medium',
  backgroundColor = "green",
  label,
  hasIcon = false,
  iconPos = "start",
  iconName = "Download",
  iconSize = 16,
  ...props
}: ButtonProps) => {
  const mode: string = primary ? 'button--primary' : 'button--secondary';
  const classes: string = ['button', `button--${size}`, `button--${backgroundColor}`, mode].join(' '); 
  var IconComponent = iconName && IconsLibrary[iconName] as React.FC<IconProps>;
  return (
    <button
      type="button"
      {...props}
    >
      <span className={classes}>
        <span className={`icon--wrapper ${!hasIcon ? "icon--hide" : ""}`}>{hasIcon && <IconComponent iconHeight={iconSize} iconWidth={iconSize}/>}</span>
        {label}
      </span>
      
    </button>
  );
};
