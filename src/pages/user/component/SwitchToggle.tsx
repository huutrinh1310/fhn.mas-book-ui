import { Switch } from "antd";

export interface ISwitchToggleProps {
  isRicher?: boolean;
}

export default function SwitchToggle({ isRicher }: ISwitchToggleProps) {
  return <Switch defaultChecked={isRicher} />;
}
