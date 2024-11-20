import { MenuItem } from "../models/MenuItem";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { Controller } from "./controller";
import { OrderDAO } from "./dao/OrderDAO";



export class OrderController implements Controller<Order> {
  public static INSTANCE = new OrderController();

  static dao = new OrderDAO();
  public getAll(): Order[] {
    return  OrderController.dao.getAll();
  }
  public getById(id: number): Order {
    return OrderController.dao.getById(id);
  }
  public remove(toRemove: Order): void {
    OrderController.dao.remove(toRemove);
  }
  public add(toAdd: Order): bigint | number {
    return OrderController.dao.add(toAdd);
  }
  public update(id: number, toUpdate: Order): void {
    OrderController.dao.update(id, toUpdate);
  }

  public add_item(item: OrderItem): void {
    OrderController.dao.add_item(item);
  }

  public update_item(id: number, item: OrderItem): void {
    OrderController.dao.update_item(id, item);
  }

  public remove_item(item: OrderItem): void {
    OrderController.dao.remove_item(item);
  }

  public get_items(order_id: number): any {
    return OrderController.dao.get_items(order_id);
  }
}
