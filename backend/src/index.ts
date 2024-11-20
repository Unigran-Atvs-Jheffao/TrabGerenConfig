import express from "express";
import cors from "cors";
import { OrderEndponts } from "./api/order_endpoints";
import { TableEndpoints } from "./api/table_endpoint";
import {MenuItemEndpoints} from "./api/menu_item_endpoints";

const app = express();

app.use(express.json());
app.use(cors())

const port = 3000;

const endpoints = [OrderEndponts, TableEndpoints, MenuItemEndpoints];

endpoints.forEach((endpoint) => {
  endpoint(app);
});

app.listen(port, () => {
  console.log(`Running server at http://localhost:${port}`);
});
