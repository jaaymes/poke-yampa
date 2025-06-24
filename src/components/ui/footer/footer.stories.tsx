import type { Meta, StoryObj } from "@storybook/react-vite";

import { Footer } from "./footer";

// Mock do hook useLanguage para o Storybook
const mockUseLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      pokemons: "Pokémons",
      showing: "Mostrando",
      of: "de",
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
  title: "UI/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    windowInfo: {
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SemInformacoes: Story = {
  args: {},
};

export const ComInformacoes: Story = {
  args: {
    windowInfo: {
      end: 20,
      total: 151,
      currentPage: 1,
      offset: 0,
      windowSize: 20,
    },
  },
};

export const PaginaIntermediaria: Story = {
  args: {
    windowInfo: {
      end: 60,
      total: 151,
      currentPage: 3,
      offset: 40,
      windowSize: 20,
    },
  },
};

export const UltimaPagina: Story = {
  args: {
    windowInfo: {
      end: 151,
      total: 151,
      currentPage: 8,
      offset: 140,
      windowSize: 11,
    },
  },
};

export const ListaVazia: Story = {
  args: {
    windowInfo: {
      end: 0,
      total: 0,
      currentPage: 0,
      offset: 0,
      windowSize: 0,
    },
  },
};

export const MuitosPokemons: Story = {
  args: {
    windowInfo: {
      end: 100,
      total: 1025,
      currentPage: 5,
      offset: 80,
      windowSize: 20,
    },
  },
};
