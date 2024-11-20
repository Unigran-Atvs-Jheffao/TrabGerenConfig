export class Table {
  id?: number;
  number: number;
  filled: boolean;
  size: number;

  constructor(id: number, number: number,  size: number, filled: boolean) {
    this.id = id;
    this.number = number;
    this.size = size;
    this.filled = filled;
  }
}
