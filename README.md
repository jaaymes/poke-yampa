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

Para adicionar novos componentes shadcn/ui:

```bash
pnpm dlx shadcn-ui@latest add [nome-do-componente]
```

## Licença

MIT
