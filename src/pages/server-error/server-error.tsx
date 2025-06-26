import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";

export function ServerError() {
  const { t } = useTranslation();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <div className="flex justify-center">
            <AlertTriangle className="h-20 w-20 text-destructive" />
          </div>
          <h1 className="text-6xl font-bold text-destructive">500</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            {t("serverError.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("serverError.description")}
          </p>
        </div>

        <div className="space-y-3">
          <Button onClick={handleRefresh} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            {t("serverError.tryAgain")}
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              {t("serverError.backHome")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
