import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const meta = {
  title: "UI/Accordion",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>O que é React?</AccordionTrigger>
        <AccordionContent>
          React é uma biblioteca JavaScript para construir interfaces de
          usuário, especialmente para aplicações web. Foi desenvolvida pelo
          Facebook.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Como instalar o React?</AccordionTrigger>
        <AccordionContent>
          Você pode instalar o React usando npm ou yarn. Execute `npx
          create-react-app meu-app` para criar um novo projeto.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>O que são componentes?</AccordionTrigger>
        <AccordionContent>
          Componentes são blocos de construção reutilizáveis que encapsulam a
          lógica e a apresentação de uma parte da interface do usuário.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Recursos do produto</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-1">
            <li>Interface intuitiva</li>
            <li>Sincronização em tempo real</li>
            <li>Suporte multiplataforma</li>
            <li>Segurança avançada</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Preços</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>
              <strong>Básico:</strong> R$ 29/mês
            </p>
            <p>
              <strong>Pro:</strong> R$ 59/mês
            </p>
            <p>
              <strong>Enterprise:</strong> Consulte-nos
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Suporte</AccordionTrigger>
        <AccordionContent>
          Oferecemos suporte 24/7 via chat, email e telefone para todos os
          planos.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="faq-1">
        <AccordionTrigger>
          Como faço para cancelar minha assinatura?
        </AccordionTrigger>
        <AccordionContent>
          Você pode cancelar sua assinatura a qualquer momento através das
          configurações da conta ou entrando em contato com nosso suporte.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>
          Existe um período de teste gratuito?
        </AccordionTrigger>
        <AccordionContent>
          Sim! Oferecemos 14 dias de teste gratuito para todos os novos
          usuários. Não é necessário cartão de crédito.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>
          Posso alterar meu plano a qualquer momento?
        </AccordionTrigger>
        <AccordionContent>
          Absolutamente! Você pode fazer upgrade ou downgrade do seu plano a
          qualquer momento. As alterações entram em vigor imediatamente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger>Os dados são seguros?</AccordionTrigger>
        <AccordionContent>
          Sim, levamos a segurança muito a sério. Todos os dados são
          criptografados em trânsito e em repouso, e seguimos as melhores
          práticas de segurança.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-2"
      className="w-full max-w-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Primeiro item</AccordionTrigger>
        <AccordionContent>Conteúdo do primeiro item.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Segundo item (aberto por padrão)</AccordionTrigger>
        <AccordionContent>
          Este item está aberto por padrão devido ao defaultValue="item-2".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Terceiro item</AccordionTrigger>
        <AccordionContent>Conteúdo do terceiro item.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="single">
        <AccordionTrigger>Clique para expandir</AccordionTrigger>
        <AccordionContent>
          Este é um accordion com apenas um item. Perfeito para seções que
          precisam ser expandidas ou recolhidas.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
