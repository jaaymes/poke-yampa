# PokéYampa

<div align="center">
  <h3>🔴 Uma aplicação Pokédex moderna e performática</h3>
  <p>Construída com React 19, TypeScript, Tailwind CSS v4 e shadcn/ui</p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
</div>

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Desenvolvimento](#-desenvolvimento)
- [Testes](#-testes)
- [Build e Deploy](#-build-e-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Performance](#-performance)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

PokéYampa é uma aplicação Pokédex moderna que demonstra as melhores práticas de desenvolvimento frontend com React 19. O projeto combina performance excepcional, acessibilidade e uma experiência de usuário fluida para criar uma ferramenta de referência Pokémon de alta qualidade.

### Características Principais

- **🚀 Performance**: Virtualização de listas para manipular milhares de Pokémon
- **📱 Responsivo**: Design mobile-first com experiência otimizada para todos os dispositivos  
- **♿ Acessível**: Conformidade WCAG 2.1 AA com suporte completo a leitores de tela
- **🌐 Internacional**: Suporte a múltiplos idiomas (português e inglês)
- **🎨 Moderno**: Interface limpa usando shadcn/ui e Tailwind CSS v4
- **⚡ Otimizado**: Bundle splitting, lazy loading e cache inteligente

## ✨ Funcionalidades

### Funcionalidades Principais
- 🔍 **Pesquisa Inteligente**: Busca em tempo real por nome de Pokémon
- 📊 **Detalhes Completos**: Visualização abrangente de estatísticas, tipos e informações
- 🌊 **Scroll Infinito**: Navegação suave através de todos os Pokémon
- 🌓 **Tema Dinâmico**: Alternância entre modo claro e escuro
- 📱 **Mobile-First**: Interface otimizada para dispositivos móveis
- ⌨️ **Navegação por Teclado**: Acessibilidade completa via teclado

### Funcionalidades Técnicas
- **Virtualização**: Renderização eficiente de listas grandes
- **Cache Inteligente**: React Query para gerenciamento de estado do servidor
- **Otimização de Imagens**: Carregamento otimizado de sprites Pokémon
- **Estados de Loading**: Feedback visual durante carregamento
- **Tratamento de Erros**: Páginas de erro graciosamente tratadas
- **Offline**: Funcionalidade básica offline com Service Worker

## 🛠️ Tecnologias Utilizadas

### Core Stack
- **[React 19.1.0](https://react.dev/)** - Framework com recursos concorrentes
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Tipagem estática
- **[Vite 6.3.5](https://vitejs.dev/)** - Build tool rápido e moderno
- **[Tailwind CSS 4.1.10](https://tailwindcss.com/)** - Framework CSS utility-first

### UI e Componentes
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de alta qualidade
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas

### Estado e Dados
- **[@tanstack/react-query 5.81.2](https://tanstack.com/query)** - Gerenciamento de estado do servidor
- **[@tanstack/react-virtual 3.13.11](https://tanstack.com/virtual)** - Virtualização de listas
- **[Axios 1.10.0](https://axios-http.com/)** - Cliente HTTP
- **[Zod 3.25.67](https://zod.dev/)** - Validação de esquemas

### Testes e Qualidade
- **[Vitest 3.2.4](https://vitest.dev/)** - Framework de testes unitários
- **[Cypress 14.5.0](https://www.cypress.io/)** - Testes end-to-end
- **[Testing Library](https://testing-library.com/)** - Utilitários de teste
- **[Storybook 9.0.13](https://storybook.js.org/)** - Documentação de componentes

### Internacionalização
- **[i18next 25.2.1](https://www.i18next.com/)** - Framework de internacionalização
- **[react-i18next 15.5.3](https://react.i18next.com/)** - Bindings React para i18next

## 🏗️ Arquitetura

### Visão Geral da Arquitetura
```
Frontend SPA (React 19)
├── 🎨 Camada de Componentes (shadcn/ui + Custom)
├── 🔄 Gerenciamento de Estado (React Query + Local State)
├── 🛣️ Roteamento (React Router v7)
├── 🌐 Camada de API (Axios + PokeAPI)
└── ⚡ Sistema de Build (Vite + TypeScript)
```

### Padrões Arquiteturais
- **Componentes Compostos**: Padrão compound para componentes complexos
- **Custom Hooks**: Lógica compartilhada encapsulada
- **Render Props**: Virtualização com @tanstack/react-virtual
- **Colocação de Estado**: Estado próximo ao uso, elevação quando necessário

### Estratégias de Performance
- **Code Splitting**: Por rota e componente
- **Bundle Optimization**: Chunks manuais para vendor, UI, etc.
- **Virtualização**: Listas virtualizadas para performance
- **Lazy Loading**: Carregamento sob demanda de componentes

## 📋 Pré-requisitos

- **Node.js** >= 18.0.0
- **pnpm** >= 10.0.0

### Verificação de Versões
```bash
node --version  # deve ser >= 18.0.0
pnpm --version  # deve ser >= 10.0.0
```

## 🚀 Instalação

```bash
# Clonar o repositório
git clone https://github.com/jaaymes/poke-yampa.git
cd poke-yampa

# Instalar dependências
pnpm install

# Verificar instalação
pnpm run dev --help
```

## 💻 Desenvolvimento

### Servidor de Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Servidor disponível em http://localhost:5173
# Hot reload ativado automaticamente
```

### Storybook - Documentação de Componentes

```bash
# Desenvolvimento do Storybook
pnpm storybook
# Disponível em http://localhost:6006

# Build do Storybook para integração
pnpm build-storybook-docs
# Integra Storybook na aplicação principal
```

### Ferramentas de Desenvolvimento

```bash
# Linting
pnpm lint              # Verificar problemas de código
pnpm lint:fix          # Corrigir problemas automaticamente

# Análise de Bundle
pnpm analyze           # Analisar tamanho dos chunks

# Lighthouse (requer servidor rodando)
pnpm lighthouse        # Análise de performance
```

## 🧪 Testes

### Testes Unitários (Vitest)

```bash
# Modo watch (desenvolvimento)
pnpm test

# Execução única
pnpm test:run

# Relatório de cobertura
pnpm test:coverage

# Interface visual
pnpm test:ui
```

### Testes End-to-End (Cypress)

```bash
# Interface gráfica do Cypress
pnpm cypress:open

# Execução em headless mode
pnpm cypress:run
```

### Estratégia de Testes

- **Testes Unitários**: Componentes isolados, hooks customizados, utilitários
- **Testes de Integração**: Fluxos de usuário, interações entre componentes
- **Testes E2E**: Jornadas críticas do usuário, responsividade
- **Testes Visuais**: Regressão visual com Chromatic

### Cobertura de Testes

- **Meta**: >90% de cobertura de código
- **Foco**: Lógica de negócio, componentes principais, hooks
- **Relatórios**: HTML e JSON para análise detalhada

## 📦 Build e Deploy

### Build de Produção

```bash
# Build completo (inclui Storybook)
pnpm build

# Build somente da aplicação
pnpm build:app

# Preview do build
pnpm preview
```

### Otimizações de Build

- **Tree Shaking**: Remoção de código não utilizado
- **Minificação**: Compressão com esbuild
- **Chunk Splitting**: Separação estratégica de bundles
- **Asset Optimization**: Otimização de imagens e recursos

### Deploy

```bash
# Preparar para deploy
pnpm build

# Arquivos de produção em /dist
# Pronto para deploy em qualquer CDN/hospedagem estática
```

### Configurações de Deploy

- **Netlify**: `_redirects` configurado para SPA
- **Vercel**: Configuração automática
- **GitHub Pages**: Suporte nativo
- **CDN**: Otimizado para distribuição global

## 📁 Estrutura do Projeto

```
src/
├── 🎨 assets/           # Recursos estáticos (imagens, ícones)
├── 🧩 components/       # Componentes React
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── carousel-image/ # Componente de carrossel
│   ├── loading/        # Estados de carregamento
│   └── pokemon-card/   # Card de Pokémon
├── 🔗 hooks/           # Custom hooks
│   ├── use-list-pokemons.ts    # Hook para listagem
│   ├── use-search-pokemon.ts   # Hook para busca
│   └── use-detail-pokemon.ts   # Hook para detalhes
├── 🌐 i18n/            # Internacionalização
│   └── locales/        # Arquivos de tradução
├── 📱 interface/       # Tipos TypeScript
├── 📚 lib/             # Utilitários e configurações
├── 📄 pages/           # Páginas da aplicação
├── 🛣️ routes/         # Configuração de rotas
├── 🔌 services/        # Serviços e API
├── 🎨 styles/          # Estilos globais
├── 🧪 test/            # Configurações de teste
└── 🛠️ utils/          # Funções utilitárias
```

### Convenções de Nomenclatura

- **Componentes**: PascalCase (`PokemonCard.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useListPokemons.ts`)
- **Utilitários**: camelCase (`formatPokemonName.ts`)
- **Tipos**: PascalCase com prefixo `I` (`IPokemon.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

## ⚡ Performance

### Métricas de Performance

- **Lighthouse Score**: >90 em todas as categorias
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3s

### Otimizações Implementadas

#### Virtualização
- Lista virtualizada para +1000 Pokémon
- Renderização sob demanda
- Smooth scrolling mantido

#### Bundle Optimization
```typescript
// Configuração de chunks manuais
manualChunks: {
  vendor: ['react', 'react-dom'],
  query: ['@tanstack/react-query'],
  ui: ['@radix-ui/react-dialog', '@radix-ui/react-tabs'],
  router: ['react-router'],
}
```

#### Caching Strategy
- React Query para cache de API
- Stale-while-revalidate pattern
- Persistência offline com localStorage

### Monitoramento

```bash
# Análise de bundle
pnpm analyze

# Audit de performance
pnpm lighthouse

# Métricas de desenvolvimento
pnpm dev --host # + Lighthouse DevTools
```

## 📋 Documentação Adicional

### Para Desenvolvedores
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitetura detalhada do sistema
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guia de contribuição
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Guia de desenvolvimento avançado
- **[TESTING.md](./TESTING.md)** - Estratégias de teste

### Para Usuários
- **[Storybook](http://localhost:6006)** - Documentação interativa de componentes
- **[USER_GUIDE.md](./USER_GUIDE.md)** - Manual do usuário
- **[FEATURES.md](./FEATURES.md)** - Funcionalidades detalhadas

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia o [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes sobre nosso código de conduta e processo de submissão de pull requests.

### Processo Rápido

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. **Commit** suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. **Push** para a branch (`git push origin feat/nova-feature`)
5. **Abra** um Pull Request

### Padrões de Commit

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: adiciona nova funcionalidade
fix: corrige bug específico
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
test: adiciona ou corrige testes
chore: mudanças de build ou ferramentas
```

### Antes de Contribuir

- Execute `pnpm test` para garantir que todos os testes passam
- Execute `pnpm lint` para verificar o código
- Execute `pnpm build` para verificar o build de produção
- Atualize a documentação se necessário

## 🐛 Troubleshooting

### Problemas Comuns

#### Erro de Instalação
```bash
# Limpar cache e reinstalar
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### Erro de Build
```bash
# Verificar versões
node --version  # >= 18.0.0
pnpm --version  # >= 10.0.0

# Limpar e rebuildar
pnpm clean:full
pnpm install
pnpm build
```

#### Testes Falhando
```bash
# Executar testes com mais detalhes
pnpm test:run --reporter=verbose

# Limpar cache de testes
pnpm test:run --clearCache
```

## 📊 Status do Projeto

- ✅ **Funcionalidades Core**: Completas e testadas
- ✅ **Performance**: Otimizada (Lighthouse >90)
- ✅ **Acessibilidade**: WCAG 2.1 AA compliant
- ✅ **Responsividade**: Mobile-first design
- ✅ **Testes**: Cobertura >90%
- ✅ **Documentação**: Abrangente e atualizada

## 📈 Roadmap

### Próximas Versões

#### v2.0 - Funcionalidades Avançadas
- [ ] Filtros avançados (tipo, geração, stats)
- [ ] Sistema de favoritos
- [ ] Comparação de Pokémon
- [ ] PWA completo

#### v2.1 - Melhorias UX
- [ ] Animações avançadas
- [ ] Gestos touch
- [ ] Atalhos de teclado
- [ ] Modo offline completo

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ por <a href="https://github.com/jaaymes">Jaaymes</a></p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>
