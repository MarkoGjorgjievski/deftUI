import type { Meta, StoryObj } from "@storybook/svelte";

import Button from "./Button.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["smaller", "small", "medium", "large"],
    },
    state: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost", "soft", "white", "link"],
    },
    width: {
      control: { type: "select" },
      options: ["shrink", "full", "default"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const label = "Button";

export const Large: Story = {
  args: {
    size: "large",
    label,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label,
  },
};

export const Smaller: Story = {
  args: {
    size: "smaller",
    label,
  },
};

export const Solid: Story = {
  args: {
    state: "solid",
    label,
  },
};

export const Outline: Story = {
  args: {
    state: "outline",
    label,
  },
};

export const Ghost: Story = {
  args: {
    state: "ghost",
    label,
  },
};

export const Soft: Story = {
  args: {
    state: "soft",
    label,
  },
};

export const White: Story = {
  args: {
    state: "white",
    label,
  },
};

export const Link: Story = {
  args: {
    state: "link",
    label,
  },
};

export const Shrink: Story = {
  args: {
    label: "👍",
    size: "small",
    width: "shrink",
  },
};

export const Full: Story = {
  args: {
    label,
    width: "full",
  },
};

export const Disabled: Story = {
  args: {
    label,
    disabled: false,
  },
};

export const Loading: Story = {
  args: {
    label,
    loading: true,
  },
};
