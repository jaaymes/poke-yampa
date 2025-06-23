import { useLanguage } from "@/hooks/use-language";

interface FooterProps {
  windowInfo: {
    start: number;
    end: number;
    total: number | undefined;
    windowSize: number;
    allPokemonsLength: number;
  };
}

export function Footer({ windowInfo }: FooterProps) {
  const { t } = useLanguage();

  if (!windowInfo.total || windowInfo.total <= 0) {
    return null;
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <footer className="sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto">
      <div className="container flex flex-col h-auto items-center justify-center py-2">
        <p className="text-sm">
          {t("showing")} {windowInfo.end} {t("of")} {windowInfo.total}{" "}
          {t("pokemons")}
        </p>

        {isDevelopment && (
          <p className="text-xs mt-1">
            Debug: Janela [{windowInfo.start}-{windowInfo.end}] | Carregados:{" "}
            {windowInfo.allPokemonsLength} | Tamanho: {windowInfo.windowSize}
          </p>
        )}
      </div>
    </footer>
  );
}
