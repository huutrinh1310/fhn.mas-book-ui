import * as React from "react";
import styles from "./index.module.scss";

export interface IIconComponentProps {
  children?: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function IconComponent({
  children,
  active,
  className,
  onClick,
}: IIconComponentProps) {
  const classnames = [styles["icon"], active && "active", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classnames} onClick={onClick}>
      {children}
    </div>
  );
}
