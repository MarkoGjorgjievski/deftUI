import type { Meta, StoryObj } from "@storybook/svelte";

import Button from "./Button.svelte";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    state: {
      control: { type: "select" },
      options: ["solid", "soft", "outline", "ghost"],
    },

    // Use **shrink** when button contains only icon
    width: { control: { type: "select" }, options: ["shrink", "full"] },

    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "inverted",
        "off-base",
        "neutral",
      ],
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  label: "Button",
  disabled: false,
  loading: false,
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    ...args,
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    ...args,
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    ...args,
  },
};
export const Success: Story = {
  args: {
    variant: "success",
    ...args,
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
    ...args,
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
    ...args,
  },
};
export const Inverted: Story = {
  args: {
    variant: "inverted",
    ...args,
  },
};
export const OffBase: Story = {
  args: {
    variant: "off-base",
    ...args,
  },
};
