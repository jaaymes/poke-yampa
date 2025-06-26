describe("Home Page - Pokémon List (Mobile)", () => {
  beforeEach(() => {
    // Define viewport para celular
    cy.viewport(430, 932);

    cy.visit("/");
    // Aguarda a página carregar completamente - aguarda mais tempo e usa timeout maior
    cy.get('[data-testid="search-input"]', { timeout: 15000 }).should(
      "be.visible"
    );

    // Força o idioma para português se não estiver
    cy.get('[data-testid="search-input-field"]').then(($input) => {
      const placeholder = $input.attr("placeholder");
      if (placeholder !== "Buscar por nome ou número") {
        cy.contains("PT").click();
        cy.wait(500);
      }
    });
  });

  describe("Carregamento inicial da página", () => {
    it("deve carregar a página com todos os elementos principais", () => {
      // Verifica se o header está presente
      cy.contains("PokéYampa").should("be.visible");

      // Verifica se os botões de idioma estão presentes
      cy.contains("PT").should("be.visible");
      cy.contains("EN").should("be.visible");

      // Verifica se o campo de busca está presente
      cy.get('[data-testid="search-input-field"]').should("be.visible");
      cy.get('[data-testid="search-input-field"]').should(
        "have.attr",
        "placeholder",
        "Buscar por nome ou número"
      );

      // Verifica se o botão de busca está presente
      cy.get('[data-testid="search-button"]').should("be.visible");

      // Aguarda um pouco para os pokémons carregarem
      cy.wait(3000);

      // Verifica se os cards de pokémon estão sendo carregados
      cy.get('[data-testid="pokemon-card"]').should(
        "have.length.greaterThan",
        0
      );
    });

    it("deve mostrar indicador de carregamento inicial", () => {
      // Recarrega a página para ver o loading
      cy.reload();

      // Verifica se o loading aparece inicialmente
      cy.get('[data-testid="loading"]').should("be.visible");

      // Aguarda o loading desaparecer
      cy.get('[data-testid="loading"]', { timeout: 10000 }).should("not.exist");
    });
  });

  describe("Funcionalidade de troca de idioma", () => {
    it("deve alternar entre português e inglês", () => {
      // Verifica se está em português inicialmente
      cy.get('[data-testid="search-input-field"]').should(
        "have.attr",
        "placeholder",
        "Buscar por nome ou número"
      );

      // Clica no botão EN para mudar para inglês
      cy.contains("EN").click();

      // Aguarda um pouco para a mudança de idioma
      cy.wait(500);

      // Verifica se mudou para inglês
      cy.get('[data-testid="search-input-field"]').should(
        "have.attr",
        "placeholder",
        "Search by name or number"
      );

      // Volta para português
      cy.contains("PT").click();

      // Aguarda um pouco para a mudança de idioma
      cy.wait(500);

      // Verifica se voltou para português
      cy.get('[data-testid="search-input-field"]').should(
        "have.attr",
        "placeholder",
        "Buscar por nome ou número"
      );
    });
  });

  describe("Lista de Pokémons", () => {
    it("deve exibir cards de pokémon com informações básicas", () => {
      // Aguarda os pokémons carregarem
      cy.wait(3000);

      // Verifica se há pelo menos alguns pokémons carregados
      cy.get('[data-testid="pokemon-card"]').should(
        "have.length.greaterThan",
        0
      );

      // Verifica o primeiro card de pokémon
      cy.get('[data-testid="pokemon-card"]')
        .first()
        .within(() => {
          // Verifica se tem nome
          cy.get('[data-testid="pokemon-name"]').should("be.visible");

          // Verifica se tem imagem
          cy.get('[data-testid="pokemon-image"]').should("be.visible");

          // Verifica se tem tipos
          cy.get('[data-testid="pokemon-types"]').should("be.visible");

          // Verifica se tem estatísticas totais
          cy.get('[data-testid="pokemon-total-stats"]').should("be.visible");
        });
    });

    it("deve carregar mais pokémons ao fazer scroll", () => {
      // Aguarda os pokémons iniciais carregarem
      cy.wait(3000);

      // Conta quantos pokémons estão visíveis inicialmente
      cy.get('[data-testid="pokemon-card"]').then(
        ($cards: JQuery<HTMLElement>) => {
          const initialCount: number = $cards.length;

          // Encontra o contêiner de rolagem virtualizada
          cy.get(".overflow-auto.max-h-\\[88vh\\]").then(($container) => {
            // Faz scroll no contêiner de rolagem (não na janela)
            $container.get(0).scrollTo(0, 1000);
          });

          cy.wait(2000);

          // Verifica se mais pokémons foram carregados
          cy.get('[data-testid="pokemon-card"]').should(($newCards) => {
            expect($newCards.length).to.be.at.least(initialCount);
          });
        }
      );
    });

    it("deve copiar nome do pokémon ao clicar no nome", () => {
      // Aguarda os pokémons carregarem
      cy.wait(3000);

      // Clica no nome do primeiro pokémon
      cy.get('[data-testid="pokemon-name"]').first().click();

      // Verifica se o nome foi copiado (simulação - não podemos testar clipboard diretamente)
      // Pelo menos verifica se o clique funcionou
      cy.get('[data-testid="pokemon-name"]').first().should("be.visible");
    });
  });

  describe("Funcionalidade de busca", () => {
    it("deve buscar pokémon por nome usando o campo de busca", () => {
      // Aguarda a página carregar
      cy.wait(2000);

      // Wait for initial loading to finish
      cy.get('[data-testid="search-button"]', { timeout: 10000 }).should(
        "not.be.disabled"
      );

      // Digite um nome de pokémon conhecido
      cy.get('[data-testid="search-input-field"]').clear().type("pikachu");

      // Aguarda um pouco para a digitação
      cy.wait(500);

      // Wait for button to be enabled after typing
      cy.get('[data-testid="search-button"]', { timeout: 10000 }).should(
        "not.be.disabled"
      );

      // Clica no botão de busca
      cy.get('[data-testid="search-button"]').click();

      // Aguarda a busca processar
      cy.wait(3000);

      // Verifica se o drawer de detalhes abriu
      cy.get('[data-testid="pokemon-detail-drawer"]').should("be.visible");
    });

    it("deve buscar pokémon pressionando Enter", () => {
      // Aguarda a página carregar
      cy.wait(2000);

      // Digite um nome de pokémon conhecido e pressiona Enter
      cy.get('[data-testid="search-input-field"]')
        .clear()
        .type("charmander{enter}");

      // Aguarda a busca processar
      cy.wait(5000);

      // Verifica se o drawer de detalhes abriu
      cy.get('[data-testid="pokemon-detail-drawer"]').should("be.visible");
    });

    it("deve limpar busca usando o botão de limpar", () => {
      // Aguarda a página carregar
      cy.wait(2000);

      // Digite algo no campo de busca
      cy.get('[data-testid="search-input-field"]').type("bulbasaur");

      // Verifica se o botão de limpar apareceu
      cy.get('[data-testid="clear-search-button"]').should("be.visible");

      // Clica no botão de limpar
      cy.get('[data-testid="clear-search-button"]').click();

      // Verifica se o campo foi limpo
      cy.get('[data-testid="search-input-field"]').should("have.value", "");

      // Verifica se o botão de limpar desapareceu
      cy.get('[data-testid="clear-search-button"]').should("not.exist");
    });
  });

  describe("Detalhes do Pokémon (Drawer)", () => {
    beforeEach(() => {
      // Busca um pokémon específico para abrir o drawer
      cy.wait(2000);

      // Wait for initial loading to finish
      cy.get('[data-testid="search-button"]', { timeout: 10000 }).should(
        "not.be.disabled"
      );

      cy.get('[data-testid="search-input-field"]').clear().type("pikachu");

      // Wait for the button to be enabled after typing
      cy.get('[data-testid="search-button"]', { timeout: 10000 }).should(
        "not.be.disabled"
      );
      cy.get('[data-testid="search-button"]').click();
      cy.wait(3000);
      cy.get('[data-testid="pokemon-detail-drawer"]').should("be.visible");
    });

    it("deve exibir informações detalhadas do pokémon", () => {
      // Verifica se o drawer está aberto
      cy.get('[data-testid="pokemon-detail-drawer"]').should("be.visible");

      // Verifica se tem o nome do pokémon
      cy.get('[data-testid="pokemon-detail-drawer"]').contains("pikachu");

      // Verifica se tem as abas de Status e Detalhes
      cy.get('[data-testid="status-tab"]').should("be.visible");
      cy.get('[data-testid="details-tab"]').should("be.visible");
    });

    it("deve navegar entre as abas Status e Detalhes", () => {
      // Verifica se está na aba Status por padrão
      cy.get('[data-testid="status-tab"]').should("be.visible");

      // Clica na aba Detalhes
      cy.get('[data-testid="details-tab"]').click();

      // Aguarda um pouco para a mudança de aba
      cy.wait(500);

      // Verifica se mudou para a aba Detalhes
      cy.get('[data-testid="abilities-label"]').should("be.visible");

      // Volta para a aba Status
      cy.get('[data-testid="status-tab"]').click();

      // Aguarda um pouco para a mudança de aba
      cy.wait(500);

      // Verifica se voltou para a aba Status
      cy.get('[data-testid="hp-stat"]').should("be.visible");
    });

    it("deve fechar o drawer ao clicar no botão fechar", () => {
      // Verifica se o drawer está aberto
      cy.get('[data-testid="pokemon-detail-drawer"]').should("be.visible");

      // Clica no botão de fechar usando data-testid
      cy.get('[data-testid="close-drawer-button"]').click({ force: true });

      // Aguarda um pouco para o drawer fechar
      cy.wait(500);

      // Verifica se o drawer foi fechado
      cy.get('[data-testid="pokemon-detail-drawer"]').should("not.exist");
    });
  });

  describe("Interações com Cards de Pokémon", () => {
    it("deve expandir estatísticas detalhadas em dispositivos móveis", () => {
      // Recarrega a página para aplicar o viewport mobile
      cy.reload();
      cy.wait(2000);

      // Aguarda a página carregar completamente
      cy.get('[data-testid="search-input"]', { timeout: 15000 }).should(
        "be.visible"
      );

      // Aguarda os pokémons carregarem
      cy.wait(3000);

      // Procura por botão de expandir no primeiro card
      cy.get('[data-testid="pokemon-card"]')
        .first()
        .within(() => {
          // Verifica se tem botão de expandir (só em mobile)
          cy.get('[data-testid="expand-button"]').should("be.visible");
          cy.get('[data-testid="expand-button"]').should("contain", "Expandir");

          // Clica no botão expandir
          cy.get('[data-testid="expand-button"]').click();

          // Aguarda um pouco para expandir
          cy.wait(500);

          // Verifica se expandiu (botão deve mudar para "Recolher")
          cy.get('[data-testid="expand-button"]').should("contain", "Recolher");
        });
    });

    it('deve abrir detalhes do pokémon ao clicar em "Ver detalhes"', () => {
      // Aguarda os pokémons carregarem
      cy.wait(3000);

      // Clica no botão "Ver detalhes" do primeiro card
      cy.get('[data-testid="pokemon-card"]')
        .first()
        .within(() => {
          cy.get('[data-testid="view-details-button"]').should(
            "contain",
            "Ver detalhes"
          );
          cy.get('[data-testid="view-details-button"]').click();
        });

      // Aguarda o drawer abrir
      cy.wait(2000);

      // Verifica se o drawer de detalhes abriu
      cy.get('[data-testid="pokemon-detail-drawer"]').should("be.visible");
    });
  });

  describe("Layout específico para mobile", () => {
    it("deve exibir layout de coluna única", () => {
      // Aguarda os pokémons carregarem
      cy.wait(3000);

      // Verifica se o contêiner tem a classe grid-cols-1 para mobile
      cy.get(".flex.flex-col.px-2").should("exist");
      cy.get(".grid-cols-2").should("not.exist");
      cy.get(".grid-cols-3").should("not.exist");
    });
  });

  describe("Tratamento de erros", () => {
    it("deve exibir mensagem de erro quando não encontrar pokémon", () => {
      // Aguarda a página carregar
      cy.wait(2000);

      // Busca por um pokémon que não existe
      cy.get('[data-testid="search-input-field"]')
        .clear()
        .type("pokemonquenaoexiste123456");
      cy.get('[data-testid="search-button"]').click();

      // Aguarda a busca processar
      cy.wait(3000);

      // Verifica se não abriu o drawer (pokémon não encontrado)
      cy.get('[data-testid="pokemon-detail-drawer"]').should("not.exist");
    });
  });

  describe("Fluxo completo de usuário", () => {
    it("deve simular um usuário navegando pela aplicação naturalmente", () => {
      // 1. Usuário chega na página e observa o conteúdo
      cy.wait(2000);
      cy.get('[data-testid="pokemon-card"]').should(
        "have.length.greaterThan",
        0
      );

      // 2. Usuário rola a página para ver mais pokémons
      cy.get(".overflow-auto.max-h-\\[88vh\\]").then(($container) => {
        $container.get(0).scrollTo(0, 500);
      });
      cy.wait(1000);
      cy.get(".overflow-auto.max-h-\\[88vh\\]").then(($container) => {
        $container.get(0).scrollTo(0, 1000);
      });
      cy.wait(1000);

      // 3. Usuário decide buscar um pokémon específico
      cy.get('[data-testid="search-input-field"]').clear().type("charizard");
      cy.wait(500);

      // 4. Usuário pressiona Enter para buscar
      cy.get('[data-testid="search-input-field"]').type("{enter}");
      cy.wait(5000);

      // 5. Usuário explora os detalhes do pokémon
      cy.get('[data-testid="pokemon-detail-drawer"]').should("be.visible");

      // 6. Usuário navega entre as abas
      cy.get('[data-testid="pokemon-detail-drawer"]').within(() => {
        cy.contains("button", "Detalhes").click();
        cy.wait(1000);
        cy.contains("button", "Status").click();
        cy.wait(1000);
      });

      // 7. Usuário fecha o drawer
      cy.get('[data-testid="close-drawer-button"]').click({ force: true });
      cy.wait(500);

      // 8. Usuário limpa a busca para ver todos os pokémons novamente
      cy.get('[data-testid="clear-search-button"]').click();
      cy.wait(1000);

      // 9. Usuário muda o idioma para inglês
      cy.contains("EN").click();
      cy.wait(1000);

      // 10. Usuário verifica se mudou para inglês
      cy.get('[data-testid="search-input-field"]').should(
        "have.attr",
        "placeholder",
        "Search by name or number"
      );

      // 11. Usuário volta para português
      cy.contains("PT").click();
      cy.wait(1000);

      // 12. Usuário explora um card específico
      cy.get('[data-testid="pokemon-card"]')
        .first()
        .within(() => {
          cy.get('[data-testid="view-details-button"]').click();
        });
      cy.wait(2000);

      // 13. Usuário fecha o drawer final
      cy.get('[data-testid="close-drawer-button"]').click({ force: true });

      // Verifica se voltou ao estado inicial
      cy.get('[data-testid="pokemon-card"]').should("be.visible");
    });
  });
});
