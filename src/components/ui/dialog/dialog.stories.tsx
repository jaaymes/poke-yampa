import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta = {
  title: "UI/Dialog",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-primary text-white rounded">
        Abrir Dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Título do Dialog</DialogTitle>
          <DialogDescription>
            Esta é a descrição do dialog. Aqui você pode adicionar informações
            importantes para o usuário.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Conteúdo principal do dialog vai aqui.</p>
        </div>
        <DialogFooter>
          <button className="px-4 py-2 border rounded">Cancelar</button>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Confirmar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-secondary text-white rounded">
        Dialog sem X
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Dialog sem botão fechar</DialogTitle>
          <DialogDescription>
            Este dialog não possui o botão X no canto superior direito.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Fechar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Simple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-outline border rounded">
        Dialog Simples
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmação</DialogTitle>
        </DialogHeader>
        <p>Tem certeza que deseja continuar?</p>
        <DialogFooter>
          <button className="px-3 py-1 text-sm border rounded">Não</button>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded">
            Sim, continuar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-primary text-white rounded">
        Dialog com Conteúdo Longo
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Termos de Uso</DialogTitle>
          <DialogDescription>
            Leia atentamente os termos de uso antes de prosseguir.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto py-4">
          <div className="space-y-4 text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate.
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>
        <DialogFooter>
          <button className="px-4 py-2 border rounded">Recusar</button>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Aceitar Termos
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Form: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-primary text-white rounded">
        Novo Usuário
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Novo Usuário</DialogTitle>
          <DialogDescription>
            Preencha as informações abaixo para criar um novo usuário.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nome completo</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Digite o nome completo"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="email@exemplo.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Cargo</label>
            <select className="w-full px-3 py-2 border rounded-md">
              <option>Selecione um cargo</option>
              <option>Desenvolvedor</option>
              <option>Designer</option>
              <option>Gerente</option>
            </select>
          </div>
        </form>
        <DialogFooter>
          <button className="px-4 py-2 border rounded">Cancelar</button>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Criar Usuário
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
