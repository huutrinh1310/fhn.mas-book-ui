import * as React from 'react';
import style from './index.module.scss';

export interface IDropdownItemProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function DropdownItem ({
    onClick,
    children,
    className,
}: IDropdownItemProps) {
    const classnames = [style['dropdown-item'], className].join(' ');
  return (
    <a onClick={onClick} className={classnames}>
      {children}
    </a>
  );
}
