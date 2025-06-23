import { useLanguage } from "@/hooks/use-language";
import { useScreenSize } from "@/hooks/use-screen-size";
import type { IPokemon } from "@/interface/pokemon";
import { typeColors } from "@/utils/color";
import { MdClose } from "react-icons/md";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader } from "./ui/drawer";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface PokemonDetailDrawerProps {
  pokemon: IPokemon | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PokemonDetailDrawer({
  pokemon,
  isOpen,
  onClose,
}: PokemonDetailDrawerProps) {
  const { isMobile } = useScreenSize();
  const { t } = useLanguage();

  if (!pokemon) return null;

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
          {pokemon.stats?.find((stat) => stat.stat.name === "hp")?.base_stat ||
            0}
        </span>
      </div>

      {/* Attack */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("attack")}</span>
        <span className="text-sm font-normal ">
          {pokemon.stats?.find((stat) => stat.stat.name === "attack")
            ?.base_stat || 0}
        </span>
      </div>

      {/* Defense */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("defense")}</span>
        <span className="text-sm font-normal ">
          {pokemon.stats?.find((stat) => stat.stat.name === "defense")
            ?.base_stat || 0}
        </span>
      </div>

      {/* Special Attack */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("specialAttackShort")}</span>
        <span className="text-sm font-normal ">
          {pokemon.stats?.find((stat) => stat.stat.name === "special-attack")
            ?.base_stat || 0}
        </span>
      </div>

      {/* Special Defense */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("specialDefenseShort")}</span>
        <span className="text-sm font-normal ">
          {pokemon.stats?.find((stat) => stat.stat.name === "special-defense")
            ?.base_stat || 0}
        </span>
      </div>

      {/* Speed */}
      <div className="flex justify-between items-center  border-b border-border">
        <span className="text-sm font-normal ">{t("speed")}</span>
        <span className="text-sm font-normal ">
          {pokemon.stats?.find((stat) => stat.stat.name === "speed")
            ?.base_stat || 0}
        </span>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center ">
        <Label className="text-sm font-medium">{t("total")}</Label>
        <Label className="text-sm font-medium">
          {pokemon.stats?.reduce((total, stat) => total + stat.base_stat, 0) ||
            0}
        </Label>
      </div>
    </div>
  );

  const renderDetailsContent = () => (
    <div>
      <div className="space-y-3">
        <h3 className="text-sm font-medium ">{t("abilities")}</h3>
        <div className="space-y-2">
          {/* Note: Using placeholder abilities as the current interface doesn't include abilities data */}
          {/* In a real implementation, you would fetch abilities from PokemonDetail */}
          <div className="text-sm ">Overgrow</div>
          <div className="text-sm ">Chlorophyll</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <span className="text-sm font-medium ">{t("height")}</span>
          <div className="text-sm ">
            {/* Note: Using placeholder height as the current interface doesn't include height data */}
            {/* In a real implementation, you would use pokemon.height from PokemonDetail */}
            7
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-sm font-medium ">{t("weight")}</span>
          <div className="text-sm ">
            {/* Note: Using placeholder weight as the current interface doesn't include weight data */}
            {/* In a real implementation, you would use pokemon.weight from PokemonDetail */}
            69
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      {/* Header with Pokemon name and types */}
      <div className="text-center space-y-4">
        <div className="flex items-center  gap-2">
          <h2 className="text-2xl font-bold  capitalize">{pokemon.name}</h2>
        </div>

        {pokemon.types && pokemon.types.length > 0 && (
          <div className="flex gap-2">
            {pokemon.types.map((pokemonType, index) => {
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
          <img
            src={pokemon.avatar}
            alt={pokemon.name}
            className="h-56 w-56 object-contain"
          />
        </div>
      </div>
      <Tabs defaultValue="status">
        <TabsList className="grid w-full grid-cols-2 bg-transparent space-x-2">
          <TabsTrigger asChild value="status" className="shadow-none">
            <Button size="sm" className="rounded-2xl">
              {t("status")}
            </Button>
          </TabsTrigger>
          <TabsTrigger asChild value="details" className="shadow-none">
            <Button size="sm" className="rounded-2xl">
              {t("details")}
            </Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="status">{renderStatusContent()}</TabsContent>
        <TabsContent value="details">{renderDetailsContent()}</TabsContent>
      </Tabs>

      {/* Tab content */}
      {/* {activeTab === "status" ? renderStatusContent() : renderDetailsContent()} */}
      {/* Tab buttons */}
      {/* {renderTabButtons()} */}
    </div>
  );

  // Render Drawer for mobile, Dialog for larger screens
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose} direction="bottom">
        <DrawerContent className="bg-[#F5FAFB] rounded-t-3xl max-h-[90vh]">
          <DrawerHeader className="relative pb-0">
            <DrawerClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 size-10 "
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
      <DialogContent className="bg-[#F5FAFB] max-w-[520px] rounded-3xl border-0 p-0">
        <div className="relative p-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4 size-10 rounded-full  z-10"
          >
            <MdClose />
          </Button>

          {renderContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
}
