import {OrderController} from "../controllers/OrderController";
import {Endpoint} from "./endpoint";
import {MenuItemController} from "../controllers/MenuItemController";

export const OrderEndponts = ((express) => {
    express.get("/api/orders", (req, res) => {
        res.send(OrderController.INSTANCE.getAll());
    })
    express.get("/api/orders/:id", (req, res) => {
        res.send(OrderController.INSTANCE.getById(parseInt(req.params.id)));
    })
    express.post("/api/orders/create", (req, res) => {
        let body = req.body;

        let rs = OrderController.INSTANCE.add({
            state: "CREATED",
            table_number: body.table_number,
            menu_items: []
        });
        res.json(
            {
                id: rs
            }
        );
    })
    express.patch("/api/orders", (req, res) => {
        let body = req.body;
        OrderController.INSTANCE.update(req.body.id, {
            state: body.state,
            table_number: body.table_number,
            menu_items: body.menu_items
        })
        res.status(200);
    })

    express.get("/api/orders/:id/get_items", (req, res) => {
        res.json(OrderController.INSTANCE.get_items(parseInt(req.params.id)))
    });

    express.post("/api/orders/:id/add_item", (req, res) => {
        let body = req.body;
        OrderController.INSTANCE.add_item({
            id_order: parseInt(req.params.id),
            id_item: body.item_id,
            qnt: body.quantity
        })
    });

    express.patch("/api/orders/:id/update_item/:item_id", (req, res) => {
        let body = req.body;
        OrderController.INSTANCE.update_item(parseInt(req.params.item_id), {
            id_order: parseInt(req.params.id),
            id_item: body.item_id,
            qnt: body.quantity
        })
    })

  express.patch("/api/orders/:id/remove_item/:item_id", (req, res) => {
    OrderController.INSTANCE.remove_item( {
      id: parseInt(req.params.item_id),
      id_order: 0,
      id_item: 0,
      qnt: 0
    })
  })
}) as Endpoint;
