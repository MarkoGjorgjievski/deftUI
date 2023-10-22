import type { Meta, StoryObj } from "@storybook/svelte";

import Alert from "./Alert.svelte";

const meta = {
  title: "Example/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: [
        "dark",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "discovery",
        "light",
      ],
    },
    state: {
      control: { type: "select" },
      options: ["solid", "soft"],
    },
    dismissable: {
      control: { type: "boolean" },
    },
    id: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "boolean" },
    },
    actionButtons: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    state: "solid",
  },
};

export const Soft: Story = {
  args: {
    state: "soft",
  },
};

export const Dark: Story = {
  args: {
    type: "dark",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
  },
};

export const Info: Story = {
  args: {
    type: "info",
  },
};

export const Success: Story = {
  args: {
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
  },
};

export const Light: Story = {
  args: {
    type: "light",
  },
};

export const Discovery: Story = {
  args: {
    type: "discovery",
  },
};
