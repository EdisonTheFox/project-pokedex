import { IMove } from "./IMove";
import { IPokemonLocation } from "./IPokemonLocation";
import { IBaseStats } from "./IBaseStats";
import { IAbility } from "./IAbility";
import { IPokedexDescription } from "./IPokedexDescription";

export interface IPokemon {
  nationalDexNumber: number;
  name: string;
  description: Array<IPokedexDescription>;
  height: number;
  weight: number;
  baseStats: IBaseStats;
  minBaseStats: IBaseStats;
  maxBaseStats: IBaseStats;
  abilities: Array<IAbility>;
  type1: string;
  type2?: string;
  learnableMoves: Array<IMove>;
  availableLocations: Array<IPokemonLocation>;
}
