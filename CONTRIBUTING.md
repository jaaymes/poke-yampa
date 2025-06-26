# Guia de Contribuição - PokéYampa

Obrigado por seu interesse em contribuir com o PokéYampa! Este guia fornece todas as informações necessárias para contribuir efetivamente com o projeto.

## 📋 Índice

- [Como Contribuir](#-como-contribuir)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Fluxo de Trabalho](#-fluxo-de-trabalho)
- [Padrões de Commit](#-padrões-de-commit)
- [Padrões de Código](#-padrões-de-código)
- [Testes](#-testes)
- [Documentação](#-documentação)
- [Code Review](#-code-review)
- [Diretrizes de Pull Request](#-diretrizes-de-pull-request)
- [Comunidade](#-comunidade)

## 🤝 Como Contribuir

### Tipos de Contribuição

Aceitamos diversos tipos de contribuições:

- 🐛 **Correção de Bugs**: Identifique e corrija problemas
- ✨ **Novas Funcionalidades**: Implemente recursos solicitados
- 📚 **Documentação**: Melhore ou adicione documentação
- 🎨 **UI/UX**: Aprimore a interface e experiência do usuário
- ⚡ **Performance**: Otimize velocidade e eficiência
- 🧪 **Testes**: Adicione ou melhore testes
- 🔧 **Ferramentas**: Melhore o processo de desenvolvimento

### Antes de Começar

1. **Verifique Issues Existentes**: Procure por issues relacionadas ao que você quer trabalhar
2. **Crie uma Issue**: Se não existir, crie uma issue para discussão
3. **Aguarde Aprovação**: Espere feedback antes de começar a trabalhar
4. **Faça Fork**: Crie seu próprio fork do repositório

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- **Node.js** >= 18.0.0
- **pnpm** >= 10.0.0
- **Git** >= 2.25.0

### Instalação

```bash
# 1. Faça fork do repositório no GitHub
# 2. Clone seu fork
git clone https://github.com/SEU_USERNAME/poke-yampa.git
cd poke-yampa

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/jaaymes/poke-yampa.git

# 4. Instale as dependências
pnpm install

# 5. Verifique se tudo está funcionando
pnpm dev
```

### Verificação da Instalação

```bash
# Execute os testes
pnpm test:run

# Execute o linter
pnpm lint

# Execute o build
pnpm build
```

Se todos os comandos executarem sem erros, sua configuração está pronta!

## 🔄 Fluxo de Trabalho

### 1. Preparação

```bash
# Certifique-se de estar na branch principal
git checkout main

# Atualize com as últimas mudanças
git pull upstream main

# Criar uma nova branch para sua feature
git checkout -b feat/nome-da-feature
```

### 2. Desenvolvimento

```bash
# Trabalhe na sua feature
# Faça commits frequentes com mensagens descritivas

# Execute os testes regularmente
pnpm test

# Verifique a qualidade do código
pnpm lint
```

### 3. Preparação para PR

```bash
# Certifique-se de que todos os testes passam
pnpm test:run

# Verifique se o build funciona
pnpm build

# Atualize com as últimas mudanças do main
git rebase upstream/main

# Envie para seu fork
git push origin feat/nome-da-feature
```

## 📝 Padrões de Commit

Seguimos a especificação [Conventional Commits](https://www.conventionalcommits.org/). Todos os commits devem seguir o formato:

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos de Commit

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `feat` | Nova funcionalidade | `feat(search): adiciona busca por tipo` |
| `fix` | Correção de bug | `fix(api): corrige erro de timeout` |
| `docs` | Documentação | `docs(readme): atualiza guia de instalação` |
| `style` | Formatação de código | `style(components): corrige indentação` |
| `refactor` | Refatoração | `refactor(hooks): simplifica useSearch` |
| `perf` | Melhoria de performance | `perf(virtual): otimiza rendering` |
| `test` | Testes | `test(pokemon): adiciona testes unitários` |
| `build` | Sistema de build | `build(vite): atualiza configuração` |
| `ci` | Integração contínua | `ci(github): adiciona workflow de testes` |
| `chore` | Tarefas de manutenção | `chore(deps): atualiza dependências` |

### Exemplos de Commits

```bash
# ✅ Bons exemplos
feat(pokemon): adiciona visualização de estatísticas
fix(search): corrige bug de busca case-sensitive
docs(contributing): adiciona guia de contribuição
style(components): aplica formatação do prettier
test(hooks): adiciona testes para useListPokemon

# ❌ Exemplos ruins
Update code
Fix stuff
Added feature
WIP
Quick fix
```

### Convenções Adicionais

- **Idioma**: Todos os commits devem ser em inglês
- **Tempo verbal**: Use o imperativo presente ("add" não "added" ou "adds")
- **Primeira letra**: Minúscula na descrição
- **Ponto final**: Não use ponto final na descrição
- **Limite de caracteres**: Máximo 50 caracteres na descrição

## 💻 Padrões de Código

### TypeScript

```typescript
// ✅ Use interfaces para objetos
interface IPokemon {
  id: number;
  name: string;
  types: string[];
}

// ✅ Use tipos para unions
type Theme = 'light' | 'dark';

// ✅ Use enums para constantes relacionadas
enum PokemonType {
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
}
```

### Componentes React

```typescript
// ✅ Use interfaces para props
interface IPokemonCardProps {
  pokemon: IPokemon;
  onSelect?: (pokemon: IPokemon) => void;
  className?: string;
}

// ✅ Use React.memo para componentes puros
export const PokemonCard = React.memo<IPokemonCardProps>(({ 
  pokemon, 
  onSelect, 
  className 
}) => {
  // Implementação do componente
});

// ✅ Use data-testid para testes
<div data-testid="pokemon-card">
  {/* Conteúdo */}
</div>
```

### Hooks Customizados

```typescript
// ✅ Nomeação consistente
function useListPokemons() {
  // lógica do hook
  
  return {
    // retorne objetos para facilitar destructuring
    pokemonsQuery,
    isLoading,
    error,
    refetch,
  };
}

// ✅ Use tipos de retorno explícitos quando necessário
function useSearch(): {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  results: IPokemon[];
} {
  // implementação
}
```

### Estilos

```typescript
// ✅ Use Tailwind classes funcionais
<div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800">
  {/* conteúdo */}
</div>

// ✅ Use clsx para classes condicionais
const cardClass = clsx(
  'rounded-lg border p-4',
  isSelected && 'border-blue-500 bg-blue-50',
  isDisabled && 'opacity-50 cursor-not-allowed'
);

// ✅ Use CSS variables para valores dinâmicos
<div 
  style={{ 
    '--pokemon-color': getPokemonColor(pokemon.type) 
  } as React.CSSProperties}
  className="bg-[var(--pokemon-color)]"
>
```

### Nomenclatura

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| **Componentes** | PascalCase | `PokemonCard` |
| **Hooks** | camelCase com `use` | `useListPokemons` |
| **Funções** | camelCase | `formatPokemonName` |
| **Variáveis** | camelCase | `selectedPokemon` |
| **Constantes** | UPPER_SNAKE_CASE | `API_BASE_URL` |
| **Tipos/Interfaces** | PascalCase com `I` | `IPokemon` |
| **Arquivos** | kebab-case | `pokemon-card.tsx` |

## 🧪 Testes

### Estratégia de Testes

Esperamos que todas as contribuições incluam testes apropriados:

#### Testes Unitários (Vitest + Testing Library)

```typescript
// pokemon-card.spec.tsx
import { render, screen } from '@testing-library/react';
import { PokemonCard } from './pokemon-card';

describe('PokemonCard', () => {
  const mockPokemon = {
    id: 1,
    name: 'Bulbasaur',
    types: ['grass', 'poison'],
  };

  it('renders pokemon name correctly', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    
    expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Bulbasaur');
  });

  it('displays pokemon types', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    
    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('poison')).toBeInTheDocument();
  });
});
```

#### Testes de Hooks

```typescript
// use-search-pokemon.spec.ts
import { renderHook, act } from '@testing-library/react';
import { useSearchPokemon } from './use-search-pokemon';

describe('useSearchPokemon', () => {
  it('filters pokemon by search term', () => {
    const { result } = renderHook(() => useSearchPokemon());
    
    act(() => {
      result.current.setSearchTerm('bulba');
    });
    
    expect(result.current.searchTerm).toBe('bulba');
  });
});
```

#### Testes End-to-End (Cypress)

```typescript
// home.cy.ts
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display pokemon grid', () => {
    cy.get('[data-testid="pokemon-grid"]').should('be.visible');
    cy.get('[data-testid="pokemon-card"]').should('have.length.greaterThan', 0);
  });

  it('should search for pokemon', () => {
    cy.get('[data-testid="search-input"]').type('pikachu');
    cy.get('[data-testid="pokemon-card"]').should('contain.text', 'Pikachu');
  });
});
```

### Executando Testes

```bash
# Testes unitários em modo watch
pnpm test

# Testes unitários uma vez
pnpm test:run

# Testes com cobertura
pnpm test:coverage

# Testes E2E
pnpm cypress:open
```

### Cobertura de Testes

- **Meta**: Manter cobertura >90%
- **Foco**: Lógica de negócio, componentes principais, hooks
- **Ignores**: Arquivos de configuração, tipos, constants

## 📚 Documentação

### Documentação de Componentes (Storybook)

```typescript
// pokemon-card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { PokemonCard } from './pokemon-card';

const meta: Meta<typeof PokemonCard> = {
  title: 'Components/PokemonCard',
  component: PokemonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pokemon: {
      id: 1,
      name: 'Bulbasaur',
      types: ['grass', 'poison'],
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};
```

### Documentação de Código

```typescript
/**
 * Hook personalizado para gerenciar a listagem de Pokémon
 * com suporte a paginação infinita e virtualização
 * 
 * @returns Objeto com dados dos Pokémon e funções de controle
 * 
 * @example
 * ```tsx
 * function PokemonList() {
 *   const { pokemonsQuery, virtualizer } = useListPokemons();
 *   
 *   if (pokemonsQuery.isLoading) return <Loading />;
 *   
 *   return (
 *     <div>
 *       {virtualizer.getVirtualItems().map(item => (
 *         <PokemonCard key={item.key} pokemon={item.pokemon} />
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function useListPokemons() {
  // implementação
}
```

## 👥 Code Review

### Como Fazer Code Review

1. **Seja Construtivo**: Feedback específico e útil
2. **Seja Respeitoso**: Mantenha tom profissional e amigável
3. **Verifique Funcionalidade**: Teste as mudanças localmente
4. **Verifique Padrões**: Garanta que seguem os padrões do projeto
5. **Sugira Melhorias**: Aponte oportunidades de otimização

### Checklist de Review

#### Funcionalidade
- [ ] A feature funciona conforme esperado?
- [ ] Não quebra funcionalidades existentes?
- [ ] Trata casos de erro adequadamente?

#### Código
- [ ] Segue os padrões do projeto?
- [ ] Está bem estruturado e legível?
- [ ] Não há código duplicado?
- [ ] Performance é adequada?

#### Testes
- [ ] Inclui testes unitários?
- [ ] Testes E2E quando necessário?
- [ ] Cobertura de testes mantida?

#### Documentação
- [ ] Código está documentado?
- [ ] Storybook atualizado?
- [ ] README atualizado se necessário?

## 📋 Diretrizes de Pull Request

### Título do PR

Use o formato do Conventional Commits:

```
feat(search): adiciona filtro por tipo de Pokémon
```

### Descrição do PR

Use este template:

```markdown
## Descrição
Breve descrição das mudanças feitas.

## Tipo de Mudança
- [ ] Bug fix (mudança que corrige um problema)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (mudança que quebra compatibilidade)
- [ ] Atualização de documentação

## Como Testar
1. Faça checkout da branch
2. Execute `pnpm install`
3. Execute `pnpm dev`
4. Teste a funcionalidade conforme descrito

## Checklist
- [ ] Meu código segue os padrões do projeto
- [ ] Executei uma auto-revisão do código
- [ ] Comentei o código em partes difíceis de entender
- [ ] Atualizei a documentação
- [ ] Adicionei testes que cobrem minhas mudanças
- [ ] Todos os testes passam localmente
- [ ] Mudanças dependentes foram mergeadas

## Screenshots (se aplicável)
Adicione screenshots mostrando as mudanças visuais.
```

### Processo de Aprovação

1. **Automated Checks**: CI deve passar (testes, lint, build)
2. **Code Review**: Pelo menos 1 aprovação de maintainer
3. **Manual Testing**: Teste manual quando necessário
4. **Documentation**: Documentação deve estar atualizada

## 🎯 Boas Práticas

### Git

```bash
# ✅ Use commits pequenos e focados
git commit -m "feat(search): adiciona input de busca"
git commit -m "feat(search): implementa lógica de filtro"
git commit -m "feat(search): adiciona testes de busca"

# ✅ Use rebase para manter histórico limpo
git rebase -i HEAD~3

# ✅ Mantenha sua branch atualizada
git rebase upstream/main
```

### Desenvolvimento

```bash
# ✅ Execute testes regularmente
pnpm test

# ✅ Use o linter antes de commits
pnpm lint

# ✅ Verifique o build
pnpm build

# ✅ Teste em diferentes dispositivos
pnpm dev --host
```

## 🐛 Reportando Bugs

### Template de Issue

```markdown
## Descrição do Bug
Descrição clara e concisa do bug.

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Faça scroll até '...'
4. Veja o erro

## Comportamento Esperado
Descrição do que deveria acontecer.

## Screenshots
Se aplicável, adicione screenshots.

## Informações do Ambiente
- OS: [e.g. iOS, Windows, macOS]
- Navegador: [e.g. chrome, safari]
- Versão: [e.g. 22]
- Dispositivo: [e.g. iPhone6, Desktop]

## Contexto Adicional
Qualquer outro contexto sobre o problema.
```

## 💡 Sugerindo Features

### Template de Feature Request

```markdown
## É uma feature relacionada a um problema?
Descrição clara do problema. Ex: "Eu fico frustrado quando [...]"

## Descreva a solução que você gostaria
Descrição clara da solução desejada.

## Descreva alternativas consideradas
Outras soluções ou features que você considerou.

## Contexto Adicional
Screenshots, mockups, ou contexto adicional.
```

## 🌟 Reconhecimento

Contribuidores são reconhecidos através de:

- **GitHub Contributors**: Lista automática de contribuidores
- **Release Notes**: Menção em notas de lançamento
- **Hall of Fame**: Seção especial no README para grandes contribuições

## 📞 Comunidade

### Canais de Comunicação

- **GitHub Issues**: Para bugs e feature requests
- **GitHub Discussions**: Para discussões gerais
- **Email**: Para questões privadas

### Código de Conduta

Este projeto segue o [Código de Conduta do Contributor Covenant](https://www.contributor-covenant.org/). 

Resumo das expectativas:
- **Seja respeitoso** com todos os participantes
- **Seja inclusivo** e acolhedor
- **Seja profissional** em todas as interações
- **Seja construtivo** no feedback

## 🎉 Agradecimentos

Obrigado por contribuir com o PokéYampa! Sua participação torna este projeto melhor para toda a comunidade.

### Primeiros Passos

Se você é novo no projeto, considere começar com:

1. **Good First Issues**: Issues marcadas como adequadas para iniciantes
2. **Documentation**: Melhorias na documentação são sempre bem-vindas
3. **Tests**: Adicionar testes para componentes existentes
4. **Bug Fixes**: Pequenas correções são uma ótima forma de começar

### Ajuda

Se você precisar de ajuda:

1. Verifique a documentação existente
2. Procure em issues fechadas
3. Abra uma issue com sua dúvida
4. Entre em contato com os maintainers

---

**Lembre-se**: Não há contribuição pequena demais. Desde correções de typos até features complexas, todas as contribuições são valiosas!

Happy coding! 🚀 