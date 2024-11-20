import { Table } from "../../models/Table";
import { DAO } from "./dao";
import {DB} from "../../utils/Database";
import {MenuItem} from "../../models/MenuItem";

export class TableDAO implements DAO<Table> {

  constructor() {
    DB.prepare(`create table if not exists tabls(
            id integer primary key autoincrement,
            number integer not null,
            size integer not null,
            filled integer not null
        )`).run();
  }

  public getAll(): Table[] {
    let statement = DB.prepare(`select * from tabls`);
    let data = statement.all() || [];
    return data.map(value => new Table(
        value["id"],
        value["number"],
        value["size"],
        value["filled"],
    ));
  }
  public getById(id: number): Table {
    let statement = DB.prepare(`select * from tabls where id = ?`);
    let data = statement.get([id]);
    return new Table(
        data["id"],
        data["number"],
        data["size"],
        data["filled"],
    )
  }
  public remove(toRemove: Table): void {
    let stmt = DB.prepare(`delete from tabls where id = ?`);
    stmt.bind([toRemove.id]).run();
  }
  public add(toAdd: Table): number | bigint {
    let stmt = DB.prepare("insert into tabls (number, size, filled) values (?,?,?)");
    return stmt.bind([toAdd.number, toAdd.size, toAdd.filled]).run().lastInsertRowid;
  }
  public update(id: number, toUpdate: Table): void {
    let stmt = DB.prepare(`update tabls set number=?,size=?,filled=? where id = ?;`);
    stmt.bind([toUpdate.number,toUpdate.size,toUpdate.filled, id]).run();
  }
}
