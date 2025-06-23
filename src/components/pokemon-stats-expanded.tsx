import { useLanguage } from "@/hooks/use-language";
import type { IPokemon } from "../interface/pokemon";

interface PokemonStatsExpandedProps {
  stats: IPokemon["stats"];
  isExpanded: boolean;
}

export function PokemonStatsExpanded({
  stats,
  isExpanded,
}: PokemonStatsExpandedProps) {
  const { t } = useLanguage();

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
        {/* HP */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-foreground/80">
            {t("hp")}
          </span>
          <span className="text-sm font-normal text-foreground">
            {stats.find((stat) => stat.stat.name === "hp")?.base_stat || 0}
          </span>
        </div>

        {/* Attack */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-foreground/80">
            {t("attack")}
          </span>
          <span className="text-sm font-normal text-foreground">
            {stats.find((stat) => stat.stat.name === "attack")?.base_stat || 0}
          </span>
        </div>

        {/* Defense */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-foreground/80">
            {t("defense")}
          </span>
          <span className="text-sm font-normal text-foreground">
            {stats.find((stat) => stat.stat.name === "defense")?.base_stat || 0}
          </span>
        </div>

        {/* Special Attack */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-foreground/80">
            {t("specialAttackShort")}
          </span>
          <span className="text-sm font-normal text-foreground">
            {stats.find((stat) => stat.stat.name === "special-attack")
              ?.base_stat || 0}
          </span>
        </div>

        {/* Special Defense */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-foreground/80">
            {t("specialDefenseShort")}
          </span>
          <span className="text-sm font-normal text-foreground">
            {stats.find((stat) => stat.stat.name === "special-defense")
              ?.base_stat || 0}
          </span>
        </div>

        {/* Speed */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-foreground/80">
            {t("speed")}
          </span>
          <span className="text-sm font-normal text-foreground">
            {stats.find((stat) => stat.stat.name === "speed")?.base_stat || 0}
          </span>
        </div>

        {/* Total - destacado */}
        <div className="flex justify-between items-center pt-2 border-t border-border/30">
          <span className="text-sm font-medium text-foreground">
            {t("total")}
          </span>
          <span className="text-sm font-medium text-foreground">
            {stats.reduce((total, stat) => total + stat.base_stat, 0)}
          </span>
        </div>
      </div>
    </div>
  );
}
