import { useDetailPokemon } from "@/hooks/use-detail-pokemon";
import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";
import { typeColors } from "@/utils/color";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import type { IPokemon } from "../interface/pokemon";
import { PokemonCardSkeleton } from "./pokemon-card-skeleton";
import { PokemonDetailDrawer } from "./pokemon-detail-drawer";
import { PokemonStatsExpanded } from "./pokemon-stats-expanded";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Image } from "./ui/image";

interface PokemonCardProps {
  pokemon: IPokemon;
  onHeightChange: (height: number) => void;
}

function PokemonCardComponent({ pokemon, onHeightChange }: PokemonCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useLanguage();
  const { isMobile } = useScreenSize();

  // Optimize height change reporting with throttling
  const reportHeight = useCallback(() => {
    if (cardRef.current && onHeightChange) {
      const height = cardRef.current.offsetHeight;
      onHeightChange(height);
    }
  }, [onHeightChange]);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(reportHeight);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [isExpanded, reportHeight]);

  const { pokemonDetailQuery } = useDetailPokemon(pokemon.url);

  // Handle expand toggle
  const handleExpandToggle = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  // Handle drawer open
  const handleDrawerOpen = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDrawerOpen(true);
  }, []);

  // Handle drawer close
  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  if (pokemonDetailQuery.isLoading) {
    return <PokemonCardSkeleton />;
  }

  if (!pokemonDetailQuery.data) {
    return (
      <div
        className="flex items-center justify-center min-h-[200px] "
        role="alert"
        aria-label={t("pokemonNotFound")}
      >
        {t("pokemonNotFound")}
      </div>
    );
  }

  const { name, types, stats, sprites } = pokemonDetailQuery.data;

  // Calculate total stats dynamically
  const totalStats = stats.reduce((total, stat) => total + stat.base_stat, 0);
  const imageUrl =
    sprites.other["dream_world"].front_default || sprites.front_default;

  return (
    <>
      <PokemonDetailDrawer
        name={name}
        types={types}
        stats={stats}
        avatar={sprites}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />
      <Card
        ref={cardRef}
        className="overflow-hidden transition-all border-0 hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
        role="article"
        aria-labelledby={`pokemon-${name}-title`}
        aria-describedby={`pokemon-${name}-stats`}
      >
        <CardContent className="p-4 flex flex-col">
          {/* Header section with Pokemon info and image */}
          <div className="flex gap-4 mb-2 justify-between px-4 items-center">
            {/* Pokemon Information */}
            <div className="flex flex-col gap-1 flex-1">
              {/* Name */}
              <h3
                id={`pokemon-${name}-title`}
                className="text-lg font-bold capitalize leading-[1.5]"
              >
                {name}
              </h3>

              {/* Types */}
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label={t("pokemonTypes")}
              >
                {types.map((type) => (
                  <Badge
                    key={type.slot}
                    variant="outline"
                    className={`border-none ${
                      typeColors[type.type.name] ||
                      "bg-secondary text-secondary-foreground"
                    }`}
                    role="listitem"
                    aria-label={`${t("type")}: ${t(type.type.name)}`}
                  >
                    {t(type.type.name)}
                  </Badge>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="flex flex-col gap-2.5 mt-2">
                <div
                  id={`pokemon-${name}-stats`}
                  className="flex items-center gap-2"
                  aria-label={`${t("totalStats")}: ${totalStats}`}
                >
                  <span className="text-sm font-normal leading-[1.4]">
                    {t("total")}
                  </span>
                  <span className="text-sm font-normal leading-[1.4]">
                    {totalStats}
                  </span>
                </div>
              </div>
            </div>

            {/* Pokemon Image */}
            <div className="h-24 w-24 flex items-center justify-center rounded flex-shrink-0 ">
              <Image
                src={imageUrl}
                alt={`${name} ${t("sprite")}`}
                className="w-full h-full object-contain rounded-md"
                priority={false}
                width={96}
                height={96}
                showLoadingIndicator={true}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-0 pt-2 justify-around">
            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleExpandToggle}
                aria-expanded={isExpanded}
                aria-controls={`pokemon-${name}-expanded-stats`}
                aria-label={`${
                  isExpanded ? t("collapse") : t("expand")
                } ${name} ${t("stats")}`}
              >
                {t("expand")}
                <MdExpandMore
                  className={`size-5 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDrawerOpen}
              aria-label={`${t("viewDetails")} ${name}`}
            >
              {t("viewDetails")}
            </Button>
          </div>

          {/* Expanded stats section */}
          {isExpanded && (
            <div
              id={`pokemon-${name}-expanded-stats`}
              role="region"
              aria-label={`${name} ${t("detailedStats")}`}
            >
              <PokemonStatsExpanded stats={stats} />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

// Memoize the component for better performance
export const PokemonCard = memo(PokemonCardComponent);
