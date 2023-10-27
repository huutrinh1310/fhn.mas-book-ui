import React from "react";
import styles from "./index.module.scss";

export interface IInputElementProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  error?: boolean;
  errorContent?: string;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const InputElement = React.forwardRef<HTMLInputElement, IInputElementProps>(
  (
    {
      type,
      className,
      primary,
      secondary,
      error,
      errorContent,
      sm,
      md = true,
      lg,
      ...props
    }: IInputElementProps,
    ref
  ) => {
    const classnames = [
      styles["input-element"],
      primary && styles.primary,
      secondary && styles.secondary,
      error && styles.error,
      className,
      sm && styles.sm,
      md && styles.md,
      lg && styles.lg,
    ]
      .filter(Boolean)
      .join(" ");

    const placeholder = error ? errorContent : props.placeholder;

    return (
      <input
        type={type}
        className={classnames}
        ref={ref}
        {...props}
        placeholder={placeholder}
      />
    );
  }
);

InputElement.displayName = "InputElement";

export default InputElement;
