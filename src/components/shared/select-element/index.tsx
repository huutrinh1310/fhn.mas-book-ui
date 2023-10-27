import * as React from "react";
import styles from "./index.module.scss";
import { ChveronDownIcon } from "@/utils/icon";

export interface ISelectElementProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  error?: boolean;
  errorContent?: string;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const SelectElement = React.forwardRef<HTMLSelectElement, ISelectElementProps>(
  (
    {
      children,
      className,
      primary,
      secondary,
      error,
      errorContent,
      sm,
      md = true,
      lg,
      ...props
    }: ISelectElementProps,
    ref
  ) => {
    const classnames = [
      styles["select-element"],
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
      <select
        ref={ref}
        {...props}
        className={classnames}
        placeholder={placeholder}
      >
        {children}
      </select>
    );
  }
);

SelectElement.displayName = "SelectElement";

export default SelectElement;
