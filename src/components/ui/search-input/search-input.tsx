import { useLanguage } from "@/hooks/use-language";
import { MdClear, MdSearch, MdSend } from "react-icons/md";
import { Button } from "../button";
import { Input } from "../input";

interface SearchInputProps {
  searchTerm: string;
  activeSearch: string;
  isLoading?: boolean;
  onSearchTermChange: (value: string) => void;
  onSearch: () => void;
  onClearSearch: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({
  searchTerm,
  activeSearch,
  isLoading = false,
  onSearchTermChange,
  onSearch,
  onClearSearch,
  onKeyPress,
}: SearchInputProps) => {
  const { t } = useLanguage();

  return (
    <div
      className="relative w-full max-w-sm mx-auto"
      data-testid="search-input"
    >
      <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-primary" />
      <Input
        placeholder={t("searchPlaceholder")}
        className="bg-card pl-10 pr-20 h-11 placeholder:text-primary"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        onKeyDown={onKeyPress}
        data-testid="search-input-field"
      />
      {/* Botão de limpar busca */}
      {(searchTerm || activeSearch.trim()) && (
        <Button
          onClick={onClearSearch}
          aria-label={t("clear")}
          variant="ghost"
          size="icon"
          className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary h-8 w-8"
          data-testid="clear-search-button"
        >
          <MdClear className="size-4" />
        </Button>
      )}
      {/* Botão de buscar */}
      <Button
        onClick={onSearch}
        aria-label={t("search")}
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary h-8 w-8"
        disabled={isLoading}
        data-testid="search-button"
      >
        <MdSend className="size-4" />
      </Button>
    </div>
  );
};
