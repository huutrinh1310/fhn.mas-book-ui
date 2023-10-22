import React from "react";
import "./index.module.scss";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button className={className} ref={ref} {...props}>
        {props.children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
