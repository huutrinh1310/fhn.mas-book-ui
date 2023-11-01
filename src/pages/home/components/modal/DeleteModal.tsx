import * as React from 'react';
import { Button, Modal } from 'antd';

export interface IDeleteModalProps {}

export default function DeleteModal(props: IDeleteModalProps) {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<Button
				type="primary"
				onClick={showModal}>
				Open Modal
			</Button>
			<Modal
				title="이 게시글을 삭제하시겠습니까?"
				open={isModalOpen}
				onOk={handleOk}
				okText="삭제"
				onCancel={handleCancel}
				cancelText="취소">
				<p>삭제된 게시글은 되돌릴 수 없습니다.</p>
			</Modal>
		</>
	);
}
