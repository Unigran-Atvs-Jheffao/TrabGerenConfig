import {DB} from "../../utils/Database";
import {MenuItem} from "../../models/MenuItem";
import {DAO} from "./dao";

export class MenuItemDAO implements DAO<MenuItem> {

    constructor() {
        DB.prepare(`create table if not exists menu_items(
            id integer primary key autoincrement,
            image varchar(128) not null,
            name varchar(128) not null,
            price real not null,
            description varchar(128) not null
        )`).run();
    }
    public getAll(): MenuItem[] {
        let statement = DB.prepare(`select * from menu_items`);
        let data = statement.all() || [];
        return data.map(value => new MenuItem(
            value["id"],
            value["image"],
            value["name"],
            value["description"],
            value["price"]
        ));
    }

    public getById(id: number): MenuItem {
        let statement = DB.prepare(`select * from menu_items where id = ?`);
        let data = statement.get([id]);
        return new MenuItem(
            id,
            data["image"],
            data["name"],
            data["description"],
            data["price"]
        )
    }

    public remove(toRemove: MenuItem): void {
        let stmt = DB.prepare(`delete from menu_items where id = ?`);
        stmt.bind([toRemove.id]).run();
    }

    public add(toAdd: MenuItem): number | bigint {
        let stmt = DB.prepare("insert into menu_items (name, description, price, image) values (?,?,?,?)");
        return stmt.bind([toAdd.name, toAdd.description, toAdd.price, toAdd.image]).run().lastInsertRowid;
    }

    public update(id: number, toUpdate: MenuItem): void {
        let stmt = DB.prepare(`update menu_items set name=?,description=?,price=?,image=? where id = ?;`);
        stmt.bind([toUpdate.name,toUpdate.description,toUpdate.price,toUpdate.image, id]).run();
    }
}
