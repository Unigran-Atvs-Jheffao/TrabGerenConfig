import { MenuItem } from "../models/MenuItem";
import { Controller } from "./controller";
import { MenuItemDAO } from "./dao/MenuItemDAO";
import {OrderController} from "./OrderController";

export class MenuItemController implements Controller<MenuItem> {

  public static INSTANCE = new MenuItemController();

  static dao = new MenuItemDAO();

  public getAll(): MenuItem[] {
    return MenuItemController.dao.getAll();
  }
  public getById(id: number): MenuItem {
    return MenuItemController.dao.getById(id);
  }
  public remove(toRemove: MenuItem): void {
    MenuItemController.dao.remove(toRemove);
  }
  public add(toAdd: MenuItem): void {
    MenuItemController.dao.add(toAdd);
  }
  public update(id: number, toUpdate: MenuItem): void {
    MenuItemController.dao.update(id, toUpdate);
  }
}
