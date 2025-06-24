import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "@storybook/test";
import { createContext, useContext, useState } from "react";
import { Button } from "../button";

// Context para simular o hook useLanguage
interface LanguageContextType {
  currentLanguage: "pt-BR" | "en";
  changeLanguage: (lang: "pt-BR" | "en") => void;
  t: (key: string) => string;
}

const MockLanguageContext = createContext<LanguageContextType | null>(null);

// Hook mockado para usar no componente
function useMockLanguage(): LanguageContextType {
  const context = useContext(MockLanguageContext);
  if (!context) {
    throw new Error("useMockLanguage must be used within MockLanguageProvider");
  }
  return context;
}

// Componente Header modificado para usar o mock
function MockHeader() {
  const { currentLanguage, changeLanguage, t } = useMockLanguage();

  return (
    <header className="sticky  px-4 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              {t("appName")}
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              onClick={() => changeLanguage("pt-BR")}
              variant={currentLanguage === "pt-BR" ? "default" : "ghost"}
            >
              PT
            </Button>
            <Button
              size="sm"
              onClick={() => changeLanguage("en")}
              variant={currentLanguage === "en" ? "default" : "ghost"}
            >
              EN
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Provider para simular a troca de idioma
function HeaderWithLanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState<"pt-BR" | "en">(
    "pt-BR"
  );

  const mockT = (key: string) => {
    const translations = {
      "pt-BR": {
        appName: "PokéYampa - Português",
      },
      en: {
        appName: "PokéYampa - English",
      },
    };
    return (
      translations[currentLanguage][
        key as keyof (typeof translations)[typeof currentLanguage]
      ] || key
    );
  };

  const changeLanguage = (lang: "pt-BR" | "en") => {
    setCurrentLanguage(lang);
    fn()(`Language changed to ${lang}`);
  };

  const contextValue: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    t: mockT,
  };

  return (
    <MockLanguageContext.Provider value={contextValue}>
      <MockHeader />
    </MockLanguageContext.Provider>
  );
}

const meta = {
  title: "UI/Header",
  component: HeaderWithLanguageToggle,
  parameters: {
    layout: "fullscreen",
    actions: {
      handles: ["changeLanguage"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderWithLanguageToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Header padrão com funcionalidade de troca de idioma. Clique nos botões PT/EN para ver a mudança em tempo real.",
      },
    },
  },
};

export const ComTrocaDeIdioma: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstra a funcionalidade completa de troca de idioma. O componente Header mantém seu comportamento original, mas agora você pode interagir com os botões PT/EN e ver as mudanças refletidas no nome da aplicação e no estado dos botões.",
      },
    },
  },
};

export const InteracaoCompleta: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Story interativa que permite testar completamente a funcionalidade de troca de idioma. Observe como o texto do cabeçalho muda entre 'PokéYampa - Português' e 'PokéYampa - English' ao clicar nos botões de idioma.",
      },
    },
  },
};
