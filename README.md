# PokéYampa

Uma aplicação Pokédex moderna construída com React, TypeScript, Tailwind CSS v4 e shadcn/ui.

## Funcionalidades

- 🔍 Pesquisa de Pokémon por nome
- 🏷️ Filtragem por tipo de Pokémon
- 🌓 Alternância entre tema claro e escuro
- 📱 Design responsivo
- 📊 Visualização detalhada de cada Pokémon

## Tecnologias Utilizadas

- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Vite

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/poke-yampa.git
cd poke-yampa

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

## Estrutura do Projeto

```
src/
  ├── assets/       # Recursos estáticos
  ├── components/   # Componentes React
  │   └── ui/       # Componentes de UI reutilizáveis
  ├── data/         # Dados mockados
  ├── lib/          # Utilitários e funções auxiliares
  ├── pages/        # Páginas da aplicação
  ├── routes/       # Configuração de rotas
  └── styles/       # Estilos globais
```

## Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Iniciar Storybook
pnpm storybook

# Construir para produção
pnpm build
```

## Storybook como Documentação (/docs)

Este projeto inclui o Storybook integrado como uma rota `/docs` dentro da aplicação. Isso permite acessar a documentação dos componentes diretamente na aplicação em produção ou desenvolvimento.

### Como usar

```bash
# Construir o Storybook e copiá-lo para public/docs
pnpm build-storybook-docs

# Iniciar o servidor de desenvolvimento com o Storybook integrado
pnpm dev-with-docs

# Construir para produção incluindo o Storybook
pnpm build-with-docs
```

### Acessando o Storybook

- Em desenvolvimento: http://localhost:5173/docs
- Em produção: https://seu-site.com/docs

Isso permite que você compartilhe a documentação dos componentes junto com a aplicação em produção, facilitando o acesso para designers, desenvolvedores e stakeholders.

## Licença

MIT
