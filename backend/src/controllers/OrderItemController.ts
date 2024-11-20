import { OrderItem } from "../models/OrderItem";
import { Controller } from "./controller";

export class OrderItemController implements Controller<OrderItem>{
    getAll(): OrderItem[] {
        throw new Error("Method not implemented.");
    }
    getById(id: number): OrderItem {
        throw new Error("Method not implemented.");
    }
    remove(toRemove: OrderItem): void {
        throw new Error("Method not implemented.");
    }
    add(toAdd: OrderItem): void {
        throw new Error("Method not implemented.");
    }
    update(id: number, toUpdate: OrderItem): void {
        throw new Error("Method not implemented.");
    }

}