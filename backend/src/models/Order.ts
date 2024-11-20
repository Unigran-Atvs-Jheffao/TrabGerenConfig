import { OrderItem } from "./OrderItem";

export class Order {
  id?: number;
  table_number: number;
  menu_items: OrderItem[];
  state: string;

  constructor(id: number, table_number: number, menu_items: OrderItem[], state: string) {
    this.id = id;
    this.table_number = table_number;
    this.menu_items = menu_items;
    this.state = state;
  }
}
