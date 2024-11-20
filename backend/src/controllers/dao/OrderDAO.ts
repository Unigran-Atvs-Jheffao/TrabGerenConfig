
import { Order } from "../../models/Order";
import { DAO } from "./dao";
import {DB} from "../../utils/Database";
import {OrderItem} from "../../models/OrderItem";
import {MenuItem} from "../../models/MenuItem";
export  class OrderDAO implements DAO<Order> {

    constructor() {
        DB.prepare(`create table if not exists orders(
            id integer primary key autoincrement,
            table_number int not null,
            state varchar(32) not null
        )`).run();

        DB.prepare(`create table if not exists order_item(
            id integer primary key autoincrement,
            id_order int not null,
            id_item int not null,
            qnt int not null
        )`).run();
    }

    public getAll(): Order[] {
        let statement = DB.prepare(`select * from orders`);
        let data = statement.all() || [];
        return data.map(value => new Order(
            value["id"],
            value["table_number"],
            [],
            value["state"]
        ));
    }
    public getById(id: number): Order {
        let statement = DB.prepare(`select * from orders where id = ?`);
        let data = statement.get([id]);
        return new Order(
            data["id"],
            data["table_number"],
            [],
            data["state"]
        )
    }
    public remove(toRemove: Order): void {
        let stmt = DB.prepare(`delete from orders where id = ?`);
        stmt.bind([toRemove.id]).run();
    }
    public add(toAdd: Order): number | bigint {
        let stmt = DB.prepare("insert into orders (table_number, state) values (?,?)");
        return stmt.bind([toAdd.table_number, toAdd.state]).run().lastInsertRowid;
    }
    public update(id: number, toUpdate: Order): void {
        let stmt = DB.prepare(`update orders set table_number=?,state=? where id = ?;`);
        stmt.bind([toUpdate.table_number,toUpdate.state, id]).run();
    }

    public add_item(item: OrderItem): void {
        let stmt = DB.prepare("insert into order_item (id_order,id_item,qnt) values (?,?, ?)");
        stmt.bind([item.id_order, item.id_item, item.qnt]).run()
    }

    public update_item(id: number, item: OrderItem): void {
        let stmt = DB.prepare("update order_item set id_order = ?,qnt = ? where id=?");
        stmt.bind([item.id_order, item.qnt, id]).run()
    }

    public async remove_item(item: OrderItem): Promise<void> {
        let stmt = DB.prepare("delete from order_item where id = ?");
        stmt.bind([item.id]).run()
    }

    public get_items(order_id: number): any {
        let stmt = DB.prepare(`select * from menu_items mi join order_item oi on oi.id_item = mi.id where oi.id_order=?;`);
        let data = stmt.bind([order_id]).all();

        return data;
    }
}