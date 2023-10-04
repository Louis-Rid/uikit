import React from 'react';
import './button.css';

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
   * if the button has an icon. optionel
   */
  hasIcon?: boolean;
  /**
   * Position of icon optionel
   */
  iconPos?: "start" | "end";
  /**
   * Position of icon optionel
   */
  icon?: string;
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
  hasIcon,
  iconPos,
  icon,
  ...props
}: ButtonProps) => {
  const mode: string = primary ? 'button--primary' : 'button--secondary';
  const classes: string = ['button', `button--${size}`, `button--${backgroundColor}`, mode].join(' '); 

  return (
    <button
      type="button"
      {...props}
    >
      <span className={classes}>
        <span></span>
        {label}
      </span>
      
    </button>
  );
};
