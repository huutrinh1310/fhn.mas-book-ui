import type { Meta, StoryObj } from "@storybook/react";

import Button, { IButtonProps } from "./index.tsx";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    children: "Button",
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
      ],
    },
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
    children: "Button",
  },
};
