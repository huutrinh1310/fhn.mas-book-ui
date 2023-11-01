import * as React from 'react';
import style from './index.module.scss';

export interface IArrowProps {
	children?: React.ReactNode;
	className?: string;
	onClicksss?: () => void;
}
export default function Arrow({
	children,
	className,
	onClicksss,
}: IArrowProps) {
	const classnames = [style.icon, className].join(' ');
	return (
		<div
			onClick={onClicksss}
			className={classnames}>
			{children}
		</div>
	);
}
