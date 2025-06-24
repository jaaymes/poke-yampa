import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

const meta = {
  title: "UI/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {},
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Abrir Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Título do Drawer</DrawerTitle>
          <DrawerDescription>
            Esta é uma descrição do drawer. Você pode adicionar qualquer
            conteúdo aqui.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Conteúdo principal do drawer vai aqui.</p>
        </div>
        <DrawerFooter>
          <Button>Confirmar</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const ComFormulario: Story = {
  args: {},
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Editar Perfil</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Editar Perfil</DrawerTitle>
          <DrawerDescription>
            Faça alterações no seu perfil aqui. Clique em salvar quando
            terminar.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <input
              id="name"
              placeholder="Seu nome"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <DrawerFooter>
          <Button>Salvar Alterações</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Simples: Story = {
  args: {},
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Menu</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-4">Menu de Navegação</h3>
          <nav className="space-y-2">
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              Início
            </a>
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              Sobre
            </a>
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              Contato
            </a>
          </nav>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const SemFooter: Story = {
  args: {},
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">Informações</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Informações Importantes</DrawerTitle>
          <DrawerDescription>
            Algumas informações que você precisa saber.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <ul className="space-y-2">
            <li>• Primeira informação importante</li>
            <li>• Segunda informação relevante</li>
            <li>• Terceira informação útil</li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};
