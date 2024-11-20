import { TableController } from "../controllers/TableController";
import { Endpoint } from "./endpoint";
import {MenuItemController} from "../controllers/MenuItemController";

export const TableEndpoints = ((express) => {
    express.get("/api/tables",(req, res) => {
        res.send(TableController.INSTANCE.getAll());
    });
    express.get("/api/tables/:id",(req, res) => {
        res.send(TableController.INSTANCE.getById(parseInt(req.params.id)));
    });
    express.post("/api/tables", (req, res) => {
        let body = req.body;

        TableController.INSTANCE.add({
            size: body.size,
            filled: body.filled,
            number: body.number
        })
    })
    express.patch("/api/tables", (req, res) => {
        let body = req.body;
        TableController.INSTANCE.update(body.id, {
            size: body.size,
            filled: body.filled,
            number: body.number
        })
    })
    express.delete("/api/tables", (req, res) => {
        let body = req.body;
        TableController.INSTANCE.remove({
            size: body.size,
            filled: body.filled,
            number: body.number,
            id: body.id,
        })
    })
}) as Endpoint;
