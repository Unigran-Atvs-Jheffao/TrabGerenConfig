import { Controller } from "./controller";
import { TableDAO } from "./dao/TableDAO";
import { Table } from "../models/Table";


export class TableController implements Controller<Table> {

  public static INSTANCE = new TableController();

  static dao = new TableDAO();

  public getAll(): Table[] {
    return  TableController.dao.getAll();
  }

  public getById(id: number): Table {
    return TableController.dao.getById(id);
  }

  public remove(toRemove: Table): void {
    TableController.dao.remove(toRemove);
  }

  public add(toAdd: Table): void {
    TableController.dao.add(toAdd);
  }

  public update(id: number, toUpdate: Table): void {
    TableController.dao.update(id, toUpdate);
  }
}
