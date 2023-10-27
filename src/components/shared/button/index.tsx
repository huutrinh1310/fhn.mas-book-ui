import React from "react";
import styles from "./index.module.scss";
import SearchLoading from "../loading/SearchLoading";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    { className, loading, primary, secondary, tertiary, sm, md, lg, ...props },
    ref
  ) => {
    const classnames = [
      styles["btn"],
      styles["btn-normal"],
      className,
      primary && styles["btn-main"],
      secondary && styles["btn-secondary"],
      tertiary && styles["btn-tertiary"],
      sm && styles["btn-small"],
      md && styles["btn-medium"],
      lg && styles["btn-normal"],
    ].join(" ");

    return (
      <>
        <button className={classnames} ref={ref} {...props}>
          {props.children}
          {loading && <SearchLoading className={styles["btn-loading"]} />}
        </button>
      </>
    );
  }
);
Button.displayName = "Button";

export default Button;
