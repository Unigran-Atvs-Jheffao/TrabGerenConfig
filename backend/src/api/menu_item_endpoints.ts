import {Endpoint} from "./endpoint";
import {Express} from "express";
import {MenuItemController} from "../controllers/MenuItemController";

export const MenuItemEndpoints = function (express: Express) {
    express.get("/api/menu_items",(req, res) => {
        res.send(MenuItemController.INSTANCE.getAll());
    });
    express.get("/api/menu_items/:id",(req, res) => {
        res.send(MenuItemController.INSTANCE.getById(parseInt(req.params.id)));
    });
    express.post("/api/menu_items", (req, res) => {
        let body = req.body;

        MenuItemController.INSTANCE.add({
            name: body.name,
            description: body.description,
            image: body.image,
            price: body.price
        })
    })
    express.patch("/api/menu_items", (req, res) => {
        let body = req.body;
        MenuItemController.INSTANCE.update(body.id, {
            name: body.name,
            description: body.description,
            image: body.image,
            price: body.price
        })
    })
    express.delete("/api/menu_items", (req, res) => {
        let body = req.body;
        MenuItemController.INSTANCE.remove({
            name: body.name,
            description: body.description,
            image: body.image,
            price: body.price,
            id: body.id
        })
    })

} as Endpoint;