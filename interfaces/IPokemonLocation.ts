import { IGame } from "./IGame";
export interface IPokemonLocation {
  game: IGame;
  route: string;
  chance: number;
  isOverworld?: boolean;
  timeRequirement?: string;
  weatherRequirement?: string;
}
