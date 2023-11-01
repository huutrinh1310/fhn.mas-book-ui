import { Avatar, Card, Col, Flex, Row, Space } from 'antd';
import React from 'react';
import avatar from '@/assets/avatar.webp';
import { CommentIcon, HeartIconOutline, HeartIconFilled } from '@/utils/icon';
import './index.css';
import { Card as ICard } from '../..';

export interface ICardHeaderProps {
	data: ICard;
}

export default function CardHeader({ data }: ICardHeaderProps) {
	const [heart, setHeart] = React.useState(10),
		[isHeart, setIsHeart] = React.useState(false);
	const onHeartButtonClick = () => {
		setHeart(heart + (isHeart ? -1 : 1));
		setIsHeart(!isHeart);
	};
	return (
		<Card
			title={
				<div style={{ paddingTop: 10 }}>
					<div style={{ fontWeight: 'lighter' }}>{data.categories}</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							paddingTop: 10,
						}}>
						<div style={{ display: 'inline-flex' }}>
							<div>
								<Avatar src={avatar}></Avatar>
							</div>
							<span style={{ paddingLeft: 10, fontWeight: 'bold' }}>
								Tiffany
							</span>
							<span style={{ paddingLeft: 10, fontWeight: 'lighter' }}>
								3 hours ago
							</span>
						</div>
						<div>
							<div className='icon-action' onClick={()=>{
								onHeartButtonClick();
							}}>
								{isHeart ? (
									<HeartIconFilled
										width={20}
										height={20}
										className="heart-icon icon-wrapper"
									/>
								) : (
									<HeartIconOutline
										width={20}
										height={20}
										className="icon-wrapper"
									/>
								)}

								<span>{heart}</span>
							</div>

							<div className='icon-action' >
								<CommentIcon
									width={20}
									height={20}
								/>
								<span>10</span>
							</div>
						</div>
					</div>
				</div>
			}
			bordered={false}
			style={{ width: 600 }}>
			<p>
				프롬프트 참고 사이트들이 있어서 소개합니다. https://flowgpt.com/
				https://www.awesomegptprompts.com/
			</p>
		</Card>
	);
}
