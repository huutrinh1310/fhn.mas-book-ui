import { Collapse, Divider } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function HomePage() {
  return (
    <>
      <Divider orientation="left">Default Size</Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "This is default size panel header",
            children: <p>{text}</p>,
          },
        ]}
      />
      <Divider orientation="left">Small Size</Divider>
      <Collapse
        size="small"
        items={[
          {
            key: "1",
            label: "This is small size panel header",
            children: <p>{text}</p>,
          },
        ]}
        expandIcon={({ isActive }) =>
          isActive ? <DownOutlined /> : <RightOutlined />
        }
      />
      <Divider orientation="left">Large Size</Divider>
      <Collapse
        size="large"
        items={[
          {
            key: "1",
            label: "This is large size panel header",
            children: <p>{text}</p>,
          },
        ]}
      />
    </>
  );
}
