import { IMove } from "./IMove";

export interface IPokemon {
  nationalDexNumber: number;
  name: string;
  description: string;
  baseStats: {
    hp: number;
    attack: number;
    defence: number;
    specialAttack: number;
    specialDefence: number;
    speed: number;
  };
  learnableMoves: Array<IMove>;
}
