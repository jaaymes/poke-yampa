import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Botão",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Deletar",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Contorno",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secundário",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Fantasma",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Pequeno",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Grande",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "🏠",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Desabilitado",
  },
};
