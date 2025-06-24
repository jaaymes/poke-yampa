import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>Descrição do card aqui</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conteúdo principal do card.</p>
      </CardContent>
      <CardFooter>
        <p>Footer do card</p>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card com Ação</CardTitle>
        <CardDescription>Card que possui uma ação no header</CardDescription>
        <CardAction>
          <button className="px-3 py-1 text-sm bg-primary text-white rounded">
            Ação
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Este card possui uma ação no header.</p>
      </CardContent>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardContent>
        <p>Card simples apenas com conteúdo.</p>
      </CardContent>
    </Card>
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Apenas Header</CardTitle>
        <CardDescription>Card com apenas header e descrição</CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const Complex: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Complexo</CardTitle>
        <CardDescription>
          Este é um exemplo de card mais complexo com múltiplas seções
        </CardDescription>
        <CardAction>
          <div className="flex gap-2">
            <button className="px-2 py-1 text-xs bg-secondary rounded">
              Ver
            </button>
            <button className="px-2 py-1 text-xs bg-primary text-white rounded">
              Editar
            </button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Este card demonstra todas as funcionalidades:</p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Header com título e descrição</li>
            <li>Ações no header</li>
            <li>Conteúdo estruturado</li>
            <li>Footer com informações adicionais</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full text-sm text-muted-foreground">
          <span>Criado em: 01/01/2024</span>
          <span>Atualizado há 2 dias</span>
        </div>
      </CardFooter>
    </Card>
  ),
};
