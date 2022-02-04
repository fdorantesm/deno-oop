import { Columns } from "../enums/columns.enum.ts";
import { ICard } from "../interfaces/card.interface.ts";

export class Card implements ICard {
  public column: Columns;

  constructor() {
    this.column = Columns.TODO;
  }

  public moveTo(column: Columns): void {
    this.column = column;
  }
}
