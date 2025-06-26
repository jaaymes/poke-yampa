import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SearchInput } from "./search-input";

const meta = {
  title: "UI/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de campo de busca com ícones e botões integrados para buscar e limpar a pesquisa.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    searchTerm: {
      control: "text",
      description: "Termo de busca atual",
    },
    activeSearch: {
      control: "text",
      description: "Termo de busca ativo",
    },
    isLoading: {
      control: "boolean",
      description: "Indica se está carregando",
    },
    onSearchTermChange: {
      description: "Callback chamado quando o termo de busca muda",
    },
    onSearch: {
      description: "Callback chamado quando o botão de busca é clicado",
    },
    onClearSearch: {
      description: "Callback chamado quando o botão de limpar é clicado",
    },
    onKeyPress: {
      description: "Callback chamado quando uma tecla é pressionada no input",
    },
  },
  args: {
    onSearchTermChange: fn(),
    onSearch: fn(),
    onClearSearch: fn(),
    onKeyPress: fn(),
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchTerm: "",
    activeSearch: "",
    isLoading: false,
  },
};

export const WithSearchTerm: Story = {
  args: {
    searchTerm: "Pikachu",
    activeSearch: "",
    isLoading: false,
  },
};

export const ActiveSearch: Story = {
  args: {
    searchTerm: "",
    activeSearch: "charizard",
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    searchTerm: "Charizard",
    activeSearch: "charizard",
    isLoading: true,
  },
};

export const WithSearchTermAndActiveSearch: Story = {
  args: {
    searchTerm: "Bulbasaur",
    activeSearch: "bulbasaur",
    isLoading: false,
  },
};
