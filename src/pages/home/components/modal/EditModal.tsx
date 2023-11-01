import * as React from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';

interface Values {
	title: string;
	description: string;
	modifier: string;
}

interface CollectionCreateFormProps {
	open: boolean;
	onCreate: (values: Values) => void;
	onCancel: () => void;
}

const CollectionCreateForm = ({
	open,
	onCreate,
	onCancel,
}: CollectionCreateFormProps) => {
	const [form] = Form.useForm();
	return (
		<Modal
			open={open}
			title="게시글 정보 수정"
			okText="Create"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={() => {
				form
					.validateFields()
					.then((values) => {
						form.resetFields();
						onCreate(values);
					})
					.catch((info) => {
						console.log('Validate Failed:', info);
					});
			}}>
			<Form
				form={form}
				layout="vertical"
				name="form_in_modal"
				initialValues={{ modifier: 'public' }}>
				<Form.Item
					name="title"
					label="게시글 제목"
					rules={[
						{
							required: false,
							message: 'Please input the title of collection!',
						},
					]}>
					<Input />
				</Form.Item>
				<Form.Item
					name="description"
					label="Description">
					<Input type="textarea" />
				</Form.Item>
				<Form.Item
					name="modifier"
					className="collection-create-form_last-form-item">
					<Radio.Group>
						<Radio value="public">Public</Radio>
						<Radio value="private">Private</Radio>
					</Radio.Group>
				</Form.Item>
			</Form>
		</Modal>
	);
};
export interface IEditModalProps {}

export default function EditModal(props: IEditModalProps) {
	const [open, setOpen] = React.useState(false);

	const onCreate = (values: any) => {
		console.log('Received values of form: ', values);
		setOpen(false);
	};

	return (
		<div>
			<Button
				type="primary"
				onClick={() => {
					setOpen(true);
				}}>
				New Collection
			</Button>
			<CollectionCreateForm
				open={open}
				onCreate={onCreate}
				onCancel={() => {
					setOpen(false);
				}}
			/>
		</div>
	);
}
