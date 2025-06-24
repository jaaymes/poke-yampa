import type { Meta, StoryObj } from "@storybook/react-vite";

import { Image } from "./image";

// Mock do hook useLanguage para o Storybook
const mockUseLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      imageLoadError: "Erro ao carregar imagem",
      error: "Erro",
    };
    return translations[key] || key;
  },
});

// Mock global para o Storybook
if (typeof window !== "undefined") {
  // @ts-expect-error - Mock global para testes do Storybook
  window.__STORYBOOK_MOCK_USE_LANGUAGE__ = mockUseLanguage;
}

const meta = {
  title: "UI/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: { type: "text" },
    },
    alt: {
      control: { type: "text" },
    },
    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
    priority: {
      control: { type: "boolean" },
    },
    showLoadingIndicator: {
      control: { type: "boolean" },
    },
    className: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    src: "https://picsum.photos/300/200",
    alt: "Imagem de exemplo",
    width: 300,
    height: 200,
  },
};

export const ComPrioridade: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Imagem com prioridade",
    width: 400,
    height: 300,
    priority: true,
  },
};

export const SemIndicadorCarregamento: Story = {
  args: {
    src: "https://picsum.photos/250/250",
    alt: "Imagem sem indicador",
    width: 250,
    height: 250,
    showLoadingIndicator: false,
  },
};

export const ImagemQuadrada: Story = {
  args: {
    src: "https://picsum.photos/200/200",
    alt: "Imagem quadrada",
    width: 200,
    height: 200,
    className: "rounded-lg shadow-md",
  },
};

export const ImagemCircular: Story = {
  args: {
    src: "https://picsum.photos/150/150",
    alt: "Imagem circular",
    width: 150,
    height: 150,
    className: "rounded-full border-4 border-white shadow-lg",
  },
};

export const ImagemGrande: Story = {
  args: {
    src: "https://picsum.photos/600/400",
    alt: "Imagem grande",
    width: 600,
    height: 400,
    className: "rounded-xl",
  },
};

export const ImagemPequena: Story = {
  args: {
    src: "https://picsum.photos/100/100",
    alt: "Imagem pequena",
    width: 100,
    height: 100,
    className: "rounded-md",
  },
};

export const ComEstilosPersonalizados: Story = {
  args: {
    src: "https://picsum.photos/350/250",
    alt: "Imagem com estilos",
    width: 350,
    height: 250,
    style: {
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      border: "2px solid #e5e5e5",
    },
  },
};
