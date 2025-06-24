import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url", "search"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Digite aqui...",
  },
};

export const WithValue: Story = {
  args: {
    value: "Valor pré-definido",
    readOnly: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Digite sua senha",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "seu@email.com",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "123",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Campo desabilitado",
    disabled: true,
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Buscar...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="input-with-label" className="text-sm font-medium">
        Nome completo
      </label>
      <Input id="input-with-label" placeholder="Digite seu nome completo" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nome
        </label>
        <Input id="name" placeholder="Seu nome" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" placeholder="seu@email.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Senha
        </label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>
      <Button type="button">Enviar</Button>
    </form>
  ),
};
