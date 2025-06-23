import { useLanguage } from "@/hooks/use-language";

interface FooterProps {
  windowInfo?: {
    end?: number;
    total?: number | undefined;
    windowSize?: number;
    currentPage?: number;
    offset?: number;
  };
}

export function Footer({ windowInfo }: FooterProps) {
  const { t } = useLanguage();

  if (!windowInfo?.total || windowInfo.total <= 0) {
    return (
      <footer className="sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto">
        <div className="container flex flex-col h-auto items-center justify-center py-2 gap-2">
          <p className="text-sm text-center">
            {t("pokemons")} - Lista virtualizada
          </p>
        </div>
      </footer>
    );
  }

  const isDevelopment = import.meta.env.DEV;

  return (
    <footer className="sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto">
      <div className="container flex flex-col h-auto items-center justify-center py-2 gap-2">
        {/* Informações da janela */}
        <p className="text-sm text-center">
          {t("showing")} {windowInfo.end || 0} {t("of")} {windowInfo.total}{" "}
          {t("pokemons")} - Página {windowInfo.currentPage || 0}
        </p>

        {/* Debug info em desenvolvimento */}
        {isDevelopment && (
          <p className="text-xs mt-1 text-center">
            Debug: Página {windowInfo.currentPage || 0} | Offset:{" "}
            {windowInfo.offset || 0} | Carregados: {windowInfo.windowSize || 0}{" "}
            | Total: {windowInfo.total}
          </p>
        )}
      </div>
    </footer>
  );
}
