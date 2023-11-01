import * as React from 'react';
import './index.module.scss';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
	{
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.antgroup.com">
				1st menu item
			</a>
		),
		key: '0',
	},
	{
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.aliyun.com">
				2nd menu item
			</a>
		),
		key: '1',
	},
	{
		type: 'divider',
	},
	{
		label: '3rd menu item（disabled）',
		key: '3',
		disabled: true,
	},
];

export interface IDropDownProps {
    children?: React.ReactNode;
    className?: string;
}

export default function DropDown() {
	return (
		<div>
			<Dropdown menu={{ items }}>
				<a onClick={(e) => e.preventDefault()}>
					<Space>
						Hover me
						<DownOutlined />
					</Space>
				</a>
			</Dropdown>
		</div>
	);
}
