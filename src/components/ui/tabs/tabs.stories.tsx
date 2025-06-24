import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = {
  title: "UI/Tabs",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Informações da Conta</h3>
          <p className="text-sm text-muted-foreground">
            Gerencie suas informações de conta aqui.
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Nome</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Seu nome"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="seu@email.com"
            type="email"
          />
        </div>
      </TabsContent>
      <TabsContent value="password" className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Alterar Senha</h3>
          <p className="text-sm text-muted-foreground">
            Atualize sua senha aqui.
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Senha atual</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="••••••••"
            type="password"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Nova senha</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="••••••••"
            type="password"
          />
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Relatórios</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <h3 className="text-lg font-semibold">Visão Geral</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">Vendas Totais</p>
            <p className="text-2xl font-bold">R$ 45.231</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">Clientes</p>
            <p className="text-2xl font-bold">1.234</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <h3 className="text-lg font-semibold">Analytics</h3>
        <div className="space-y-2">
          <p>
            Visualizações da página: <strong>12.345</strong>
          </p>
          <p>
            Taxa de conversão: <strong>3.2%</strong>
          </p>
          <p>
            Tempo médio na página: <strong>2m 34s</strong>
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        <h3 className="text-lg font-semibold">Relatórios</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 border rounded">
            <span>Relatório Mensal</span>
            <button className="px-3 py-1 bg-primary text-white rounded text-sm">
              Baixar
            </button>
          </div>
          <div className="flex justify-between items-center p-2 border rounded">
            <span>Relatório Anual</span>
            <button className="px-3 py-1 bg-primary text-white rounded text-sm">
              Baixar
            </button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="flex w-[600px]"
    >
      <TabsList className="flex-col h-fit w-[200px]">
        <TabsTrigger value="profile" className="w-full">
          Perfil
        </TabsTrigger>
        <TabsTrigger value="settings" className="w-full">
          Configurações
        </TabsTrigger>
        <TabsTrigger value="notifications" className="w-full">
          Notificações
        </TabsTrigger>
        <TabsTrigger value="security" className="w-full">
          Segurança
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 ml-4">
        <TabsContent value="profile" className="mt-0">
          <h3 className="text-lg font-semibold mb-4">Perfil</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium">João Silva</p>
                <p className="text-sm text-muted-foreground">
                  joao@exemplo.com
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Bio</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md"
                rows={3}
                placeholder="Conte um pouco sobre você..."
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="settings" className="mt-0">
          <h3 className="text-lg font-semibold mb-4">Configurações</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Tema escuro</p>
                <p className="text-sm text-muted-foreground">
                  Ativar modo escuro
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Idioma</p>
                <p className="text-sm text-muted-foreground">
                  Português (Brasil)
                </p>
              </div>
              <select className="px-3 py-1 border rounded">
                <option>Português</option>
                <option>English</option>
                <option>Español</option>
              </select>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="mt-0">
          <h3 className="text-lg font-semibold mb-4">Notificações</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  Receber notificações por email
                </p>
              </div>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push</p>
                <p className="text-sm text-muted-foreground">
                  Notificações push no navegador
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security" className="mt-0">
          <h3 className="text-lg font-semibold mb-4">Segurança</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">Autenticação de dois fatores</p>
              <p className="text-sm text-muted-foreground mb-3">
                Adicione uma camada extra de segurança à sua conta
              </p>
              <button className="px-4 py-2 bg-primary text-white rounded">
                Ativar 2FA
              </button>
            </div>
            <div>
              <p className="font-medium mb-2">Sessões ativas</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <p className="text-sm">Chrome - São Paulo</p>
                    <p className="text-xs text-muted-foreground">Ativo agora</p>
                  </div>
                  <button className="text-sm text-red-600">Encerrar</button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const Simple: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[300px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Conteúdo da primeira tab.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Conteúdo da segunda tab.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="home" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="home">🏠 Início</TabsTrigger>
        <TabsTrigger value="profile">👤 Perfil</TabsTrigger>
        <TabsTrigger value="settings">⚙️ Config</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Bem-vindo!</h3>
          <p className="text-muted-foreground">Esta é a página inicial.</p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Seu Perfil</h3>
          <p className="text-muted-foreground">Informações do seu perfil.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Configurações</h3>
          <p className="text-muted-foreground">Ajuste suas preferências.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
