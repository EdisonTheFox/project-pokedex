export interface IMove {
  tmNumber?: number; //Can be null for moves not learnable by TM
  trNumber?: number; //Used in GenVIII ONLY
  hmNumber?: number; //not all moves are HMs
  moveName: string;
  basePP: number;
  maxPP: number;
  accuracy?: number; //Can be null for sure hit moves
  power?: number; //can be null for status moves
  type: string;
  moveAttribute: string; //Physical/Special/Status
}
