import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { toast } from "./index";

const meta = {
  title: "UI/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Evento agendado", {
          description: "Sexta-feira, 2 de fevereiro de 2024 às 17:00.",
        })
      }
    >
      Mostrar Toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success("Sucesso!", {
          description: "Operação realizada com sucesso.",
        })
      }
    >
      Toast de Sucesso
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.error("Erro!", {
          description: "Algo deu errado. Tente novamente.",
        })
      }
    >
      Toast de Erro
    </Button>
  ),
};

export const Warning: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.warning("Atenção!", {
          description: "Esta ação não pode ser desfeita.",
        })
      }
    >
      Toast de Aviso
    </Button>
  ),
};

export const Info: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.info("Informação", {
          description: "Aqui está uma informação importante.",
        })
      }
    >
      Toast de Informação
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Evento agendado", {
          description: "Sexta-feira, 2 de fevereiro de 2024 às 17:00.",
          action: {
            label: "Desfazer",
            onClick: () => console.log("Desfeito"),
          },
        })
      }
    >
      Toast com Ação
    </Button>
  ),
};
