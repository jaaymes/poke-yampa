import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";
import type { PokemonDetail } from "@/interface/pokemon-detail";
import { typeColors } from "@/utils/color";
import { MdClose } from "react-icons/md";
import { CarouselImage } from "./carousel-image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface PokemonDetailDrawerProps {
  types: PokemonDetail["types"];
  stats: PokemonDetail["stats"];
  name: PokemonDetail["name"];
  avatar: PokemonDetail["sprites"];
  abilities: PokemonDetail["abilities"];
  isOpen: boolean;
  onClose: () => void;
}

export function PokemonDetailDrawer({
  types,
  stats,
  name,
  avatar,
  abilities,
  isOpen,
  onClose,
}: PokemonDetailDrawerProps) {
  const { isMobile } = useScreenSize();
  const { t } = useLanguage();
  const pokemonDescriptionId = `pokemon-${name}-description`;

  const getTypeTranslation = (type: string) => {
    const typeKey = type.toLowerCase() as keyof typeof typeColors;
    return t(typeKey) || type;
  };

  const renderStatusContent = () => (
    <div className="space-y-1">
      {/* HP */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("hp")}</span>
        <span className="text-sm font-normal ">
          {stats?.find((stat) => stat.stat.name === "hp")?.base_stat || 0}
        </span>
      </div>

      {/* Attack */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("attack")}</span>
        <span className="text-sm font-normal ">
          {stats?.find((stat) => stat.stat.name === "attack")?.base_stat || 0}
        </span>
      </div>

      {/* Defense */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("defense")}</span>
        <span className="text-sm font-normal ">
          {stats?.find((stat) => stat.stat.name === "defense")?.base_stat || 0}
        </span>
      </div>

      {/* Special Attack */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("specialAttackShort")}</span>
        <span className="text-sm font-normal ">
          {stats?.find((stat) => stat.stat.name === "special-attack")
            ?.base_stat || 0}
        </span>
      </div>

      {/* Special Defense */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("specialDefenseShort")}</span>
        <span className="text-sm font-normal ">
          {stats?.find((stat) => stat.stat.name === "special-defense")
            ?.base_stat || 0}
        </span>
      </div>

      {/* Speed */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("speed")}</span>
        <span className="text-sm font-normal ">
          {stats?.find((stat) => stat.stat.name === "speed")?.base_stat || 0}
        </span>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center ">
        <Label className="text-sm font-medium">{t("total")}</Label>
        <Label className="text-sm font-medium">
          {stats?.reduce((total, stat) => total + stat.base_stat, 0) || 0}
        </Label>
      </div>
    </div>
  );

  const renderDetailsContent = () => (
    <div className="space-y-4">
      {/* Abilities Section */}
      <div className="flex items-stretch gap-2">
        <span className="text-sm font-bold text-[#2A2D46]">
          {t("abilities")}
        </span>
        <span className="text-sm text-[#5D5F7C]">
          {abilities.map((ability) => t(ability.ability.name)).join(", ")}
        </span>
      </div>

      {/* Height and Weight Section */}
      <div className="flex gap-4">
        <div className="flex gap-2 flex-1">
          <span className="text-sm font-bold text-[#2A2D46]">
            {t("height")}
          </span>
          <span className="text-sm text-[#5D5F7C]">7</span>
        </div>
        <div className="flex gap-2 flex-1">
          <span className="text-sm font-bold text-[#2A2D46]">
            {t("weight")}
          </span>
          <span className="text-sm text-[#5D5F7C]">69</span>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      {/* Header with Pokemon name and types */}
      <div className="text-center space-y-4">
        <div className="flex items-center  gap-2">
          <h2 className="text-2xl font-bold  capitalize">{name}</h2>
        </div>

        {types && types.length > 0 && (
          <div className="flex gap-2">
            {types.map((pokemonType, index) => {
              const typeName =
                typeof pokemonType === "string"
                  ? pokemonType
                  : pokemonType.type.name;
              return (
                <Badge
                  key={index}
                  variant="outline"
                  className={`border-none ${
                    typeColors[typeName.toLowerCase()] || "bg-muted"
                  }`}
                >
                  {getTypeTranslation(typeName)}
                </Badge>
              );
            })}
          </div>
        )}
      </div>

      <div className="space-y-4">
        {/* Pokemon Image */}
        <div className="flex justify-center mb-6">
          <CarouselImage
            images={[
              avatar.other["official-artwork"].front_default,
              avatar.front_default,
              avatar.other["dream_world"].front_default,
              avatar.other["home"].front_default,
              avatar.other["home"].front_female,
              avatar.other["home"].front_shiny,
              avatar.other["home"].front_shiny_female,
              avatar.other["official-artwork"].front_shiny,
            ]}
          />
        </div>
      </div>
      <Tabs defaultValue="status">
        <TabsList className="grid w-full grid-cols-2 bg-transparent space-x-2">
          <TabsTrigger asChild value="status" className="shadow-none">
            <Button size="sm" className="rounded-2xl" aria-label={t("status")}>
              {t("status")}
            </Button>
          </TabsTrigger>
          <TabsTrigger asChild value="details" className="shadow-none">
            <Button size="sm" className="rounded-2xl" aria-label={t("details")}>
              {t("details")}
            </Button>
          </TabsTrigger>
        </TabsList>
        <div className="h-42">
          <TabsContent value="status" className="mt-2 h-full">
            {renderStatusContent()}
          </TabsContent>
          <TabsContent value="details" className="mt-2 h-full">
            {renderDetailsContent()}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );

  // Render Drawer for mobile, Dialog for larger screens
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose} direction="bottom">
        <DrawerContent data-testid="pokemon-detail-drawer">
          <DrawerHeader className="relative pb-0">
            <DrawerTitle className="sr-only">{name}</DrawerTitle>
            <DrawerClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 size-10 "
                aria-label={t("close")}
              >
                <MdClose />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="px-6 py-4 overflow-y-auto">{renderContent()}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle className="sr-only">{name}</DialogTitle>
        <DialogDescription id={pokemonDescriptionId} className="sr-only">
          {t("pokemonDetails")} {name}
        </DialogDescription>
        <div className="relative p-6">{renderContent()}</div>
      </DialogContent>
    </Dialog>
  );
}
