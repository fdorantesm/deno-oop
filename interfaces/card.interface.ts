import { Columns } from "../enums/columns.enum.ts";

export interface ICard {
  column: Columns;
  moveTo: (column: Columns) => void;
}
