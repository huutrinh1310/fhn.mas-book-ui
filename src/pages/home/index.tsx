import Arrow from '@/components/shared/icon-action';
import style from './index.module.scss';
import { ArrowDownIcon } from '@/utils/icon';
import { DownOutlined } from '@ant-design/icons';
import { useEffect, useState, lazy, Suspense } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import stylesDropdown from '@/components/shared/dropdown/index.module.scss';
import BUILoading from '@/components/shared/loading';
import DeleteModal from './components/modal/DeleteModal';
import EditModal from './components/modal/EditModal';

const CardItem = lazy(() => import('@/pages/home/components/card'));

const items: MenuProps['items'] = [
	{
		key: '1',
		icon: <DownOutlined />,
		title: 'Item 1',
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
];

export interface Card {
	categories: string;
	title: string;
	content: string;
	createdAt: string;
}

const cardData: Card[] = [
	{
		categories: '정보공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '공요',
		title: '제목1',
		content: '',
		createdAt: '',
	},
	{
		categories: '정보공',
		title: '제목1',
		content: '',
		createdAt: '',
	},
];

export default function HomePage() {
	const [count, setCount] = useState(0);
	const [cards, setCards] = useState<Card[]>([
		{
			categories: '정보공요',
			title: '제목1',
			content: '',
			createdAt: '',
		},
		{
			categories: '공요',
			title: '제목1',
			content: '',
			createdAt: '',
		},
		{
			categories: '정보공',
			title: '제목1',
			content: '',
			createdAt: '',
		},
		{
			categories: '정보공요',
			title: '제목1',
			content: '',
			createdAt: '',
		},
	]);

	// const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// useEffect(() => {
	// 	const getCardItems = async () => {
	// 		const responseData = await fetch('https://,..../api/cards')
	// 			.then((response) => {
	// 				return response.json();
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});

	// 		return responseData;
	// 	};

	// 	getCardItems().then((data) => {
	// 		setCards(data);
	// 	});
	// }, []);

	return (
		<div className={style.content}>
			<Arrow
				onClicksss={() => {
					window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
				}}
				className={style['content-action-icon']}>
				<ArrowDownIcon
					width={20}
					height={20}
				/>
			</Arrow>
			<div
				className="listCard"
				style={{}}>
				<Suspense fallback={<BUILoading />}>
					{cards && cards.map((item) => <CardItem data={item} />)}
				</Suspense>
			</div>
			<DeleteModal />

			<EditModal />
		</div>
	);
}
