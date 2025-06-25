import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loading, LoadingSkeleton, Spinner } from "./loading";

const meta = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size of the loading spinner",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    text: {
      description: "Text to display below the loading spinner",
    },
    className: {
      description: "Additional classes to apply to the loading component",
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    text: "Carregando...",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    text: "Carregando...",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    text: "Carregando...",
  },
};

export const WithoutText: Story = {
  args: {
    size: "md",
    text: undefined,
  },
};

export const CustomText: Story = {
  args: {
    size: "md",
    text: "Buscando Pokémons...",
  },
};

// Stories for the LoadingSkeleton component
export const Skeleton: Story = {
  render: () => <LoadingSkeleton />,
};

// Stories for the Spinner component
export const SimpleSpinner: Story = {
  render: () => <Spinner />,
};

export const CustomSpinner: Story = {
  render: () => <Spinner className="w-10 h-10 border-4 border-red-500" />,
};
