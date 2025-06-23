import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";
import { typeColors } from "@/utils/color";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import type { IPokemon } from "../interface/pokemon";
import { PokemonStatsExpanded } from "./pokemon-stats-expanded";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface PokemonCardProps {
  pokemon: IPokemon;
  onClick: (pokemon: IPokemon) => void;
}

export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  const { name, avatar, types, stats } = pokemon;
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();
  const { isMobile } = useScreenSize();

  // Calcular total de stats dinamicamente
  const totalStats = stats.reduce((total, stat) => total + stat.base_stat, 0);

  return (
    <Card className="overflow-hidden transition-all border-0">
      <CardContent className="p-4 flex flex-col">
        {/* Seção superior com informações e imagem */}
        <div className="flex gap-4 mb-2 justify-between px-4 items-center">
          {/* Informações do Pokémon */}
          <div className="flex flex-col gap-1">
            {/* Nome */}
            <h3 className="text-lg font-bold  capitalize leading-[1.5] ">
              {name}
            </h3>

            {/* Types */}
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Badge
                  key={type.slot}
                  variant="outline"
                  className={`border-none ${
                    typeColors[type.type.name] ||
                    "bg-muted text-muted-foreground"
                  }`}
                >
                  {t(type.type.name)}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex  items-center gap-2">
                <span className="text-sm font-normal  leading-[1.4] ">
                  {t("total")}
                </span>
                <span className="text-sm font-normal  leading-[1.4] ">
                  {totalStats}
                </span>
              </div>
            </div>
          </div>

          {/* Imagem do Pokémon */}
          <div className="h-24 flex items-center justify-center rounded">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-contain p-1"
            />
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-0 pt-2 justify-around">
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(event) => {
                event.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              {t("expand")}
              <MdExpandMore
                className={`size-5 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={(event) => {
              event.stopPropagation();
              onClick(pokemon);
            }}
          >
            {t("viewDetails")}
          </Button>
        </div>

        {/* Seção expandida com stats detalhadas */}
        <PokemonStatsExpanded stats={stats} isExpanded={isExpanded} />
      </CardContent>
    </Card>
  );
}
