import * as React from 'react';
import style from './index.module.scss';

export interface IDropdownTriggerProps {
	children?: React.ReactNode;
	className?: string;
	onClick?: (e: any) => void;

	primary?: boolean;
	secondary?: boolean;
	sm?: boolean;
}

export default function DropdownTrigger({
	onClick,
	children,
	className,
}: IDropdownTriggerProps) {
	const classnames = [style['dropdown-item'], className].join(' ');

	return (
		<a
			onClick={onClick}
			className={classnames}>
			{children}
		</a>
	);
}
