# PokéYampa

Uma aplicação Pokédex moderna construída com React, TypeScript, Tailwind CSS v4 e shadcn/ui.

## Funcionalidades

- 🔍 Pesquisa de Pokémon por nome
- 🏷️ Filtragem por tipo de Pokémon
- 🌓 Alternância entre tema claro e escuro
- 📱 Design responsivo
- 📊 Visualização detalhada de cada Pokémon
- 🌐 Suporte para múltiplos idiomas (i18n)
- 🎨 Componentes documentados com Storybook
- ✅ Testes unitários e E2E com Cypress
- 📈 Análise de bundle com Bundle Analyzer
- ⚡️ Testes de performance com Lighthouse

## Tecnologias Utilizadas

- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Vite
- Vitest (Testes Unitários)
- Cypress (Testes E2E)
- Storybook 9
- i18next
- React Query

## Pré-requisitos

- Node.js >= 18.0.0
- pnpm >= 10.0.0

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/jaaymes/poke-yampa.git
cd poke-yampa

# Instalar dependências
pnpm install
```

## Desenvolvimento

### Servidor de Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# O servidor iniciará em http://localhost:5173
```

### Storybook

```bash
# Iniciar Storybook em modo de desenvolvimento
pnpm storybook

# O Storybook iniciará em http://localhost:6006

# Construir o Storybook e integrá-lo à aplicação
pnpm build-storybook-docs
```

### Testes

```bash
# Executar testes unitários
pnpm test           # Modo watch
pnpm test:run       # Execução única
pnpm test:coverage  # Relatório de cobertura
pnpm test:ui        # Interface visual do Vitest

# Executar testes E2E com Cypress
pnpm cypress:open   # Interface visual do Cypress
```

### Build e Preview

```bash
# Construir para produção
pnpm build

# Visualizar build
pnpm preview

# Analisar bundle
pnpm analyze
```

### Limpeza

```bash
# Remover arquivos de build e dependências
pnpm clean:full
```

## Estrutura do Projeto

```
src/
  ├── assets/       # Recursos estáticos
  ├── components/   # Componentes React
  │   └── ui/       # Componentes de UI reutilizáveis
  ├── data/         # Dados mockados
  ├── hooks/        # Custom hooks
  ├── i18n/         # Configurações de internacionalização
  ├── lib/          # Utilitários e funções auxiliares
  ├── pages/        # Páginas da aplicação
  ├── routes/       # Configuração de rotas
  ├── services/     # Serviços e chamadas API
  ├── styles/       # Estilos globais
  ├── test/         # Configurações de teste
  └── utils/        # Funções utilitárias
```

## Documentação de Componentes

Este projeto utiliza o Storybook para documentação de componentes, que pode ser acessado de duas formas:

### Em Desenvolvimento
- Storybook isolado: http://localhost:6006
- Integrado à aplicação: http://localhost:5173/docs

### Em Produção
- Integrado à aplicação: https://poke-yampa-en8g.vercel.app/docs

## Performance

O projeto inclui ferramentas para análise de performance:

- Lighthouse para métricas de performance
- Bundle analyzer para análise do tamanho do bundle
- Testes de performance automatizados

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

MIT
