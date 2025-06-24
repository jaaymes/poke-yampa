import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Nome do campo",
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: "input-example",
    children: "Email",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Label>
      <span className="mr-1">📧</span>
      Email
    </Label>
  ),
};

export const Required: Story = {
  render: () => (
    <Label>
      Nome completo
      <span className="text-red-500 ml-1">*</span>
    </Label>
  ),
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="demo-input">Nome</Label>
      <input
        id="demo-input"
        className="border rounded px-3 py-2 w-full"
        placeholder="Digite seu nome"
      />
    </div>
  ),
};

export const FormField: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="first-name">
          Primeiro nome
          <span className="text-red-500 ml-1">*</span>
        </Label>
        <input
          id="first-name"
          className="border rounded px-3 py-2 w-full"
          placeholder="João"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          <span className="mr-1">📧</span>
          Email
        </Label>
        <input
          id="email"
          type="email"
          className="border rounded px-3 py-2 w-full"
          placeholder="joao@exemplo.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          <span className="mr-1">📱</span>
          Telefone
          <span className="text-sm text-gray-500 ml-1">(opcional)</span>
        </Label>
        <input
          id="phone"
          type="tel"
          className="border rounded px-3 py-2 w-full"
          placeholder="(11) 99999-9999"
        />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2 opacity-50">
      <Label htmlFor="disabled-input">Campo desabilitado</Label>
      <input
        id="disabled-input"
        className="border rounded px-3 py-2 w-full"
        placeholder="Campo desabilitado"
        disabled
      />
    </div>
  ),
};
