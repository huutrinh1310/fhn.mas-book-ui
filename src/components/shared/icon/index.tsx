import * as React from "react";
import style from './index.module.scss';

export interface IIconComponentProps {
  children?: React.ReactNode;
  active?: boolean;
  className?: string;
}

export default function IconComponent({
  children,
  active,
  className,
}: IIconComponentProps) {
  const classnames = [style.icon, active && "active", className]
    .filter(Boolean)
    .join(" ");
  return <div className={classnames}>{children}</div>;
}
