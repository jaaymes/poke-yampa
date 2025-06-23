import { useState } from "react";
import type { IPokemon } from "../interface/pokemon";
import { PokemonCard } from "./pokemon-card";
import { PokemonDetailDrawer } from "./pokemon-detail-drawer";

interface PokemonGridProps {
  pokemons: IPokemon[];
}

export function PokemonGrid({ pokemons }: PokemonGridProps) {
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePokemonClick = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={handlePokemonClick}
          />
        ))}
      </div>
      <PokemonDetailDrawer
        pokemon={selectedPokemon}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </>
  );
}
