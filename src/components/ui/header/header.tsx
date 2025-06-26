import { useLanguage } from "@/hooks/use-language";
import { Button } from "../button";

export function Header() {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  return (
    <header className="sticky   flex items-center container h-16 px-4 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto">
      {/* <div className="container flex h-16 items-center"> */}
      <div className="mr-4 flex items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">{t("appName")}</span>
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
      {/* </div> */}
    </header>
  );
}
