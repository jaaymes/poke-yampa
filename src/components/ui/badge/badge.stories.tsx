import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline"],
    },
    asChild: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secundário",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Erro",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Contorno",
  },
};

export const WithIcon: Story = {
  args: {
    children: "🏆 Conquista",
  },
};

export const Number: Story = {
  args: {
    children: "42",
  },
};

export const Status: Story = {
  args: {
    variant: "secondary",
    children: "Ativo",
  },
};
