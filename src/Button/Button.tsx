import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: "white" | "grey" | "green";
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode: string = primary ? 'button--primary' : 'button--secondary';
  const classes: string[] = ['button', `button--${size}`, `button--${backgroundColor}`, mode]; 

  return (
    <button
      type="button"
      className={classes.join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
