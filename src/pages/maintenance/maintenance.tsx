import { Clock, Home, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";

export function Maintenance() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Wrench className="h-20 w-20 text-warning" />
          </div>
          <h1 className="text-4xl font-bold text-warning">
            {t("maintenance.title")}
          </h1>
          <p className="text-muted-foreground">
            {t("maintenance.description")}
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{t("maintenance.returnLater")}</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              {t("maintenance.backHome")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
