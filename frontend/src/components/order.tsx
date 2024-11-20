"use client"

import { useState } from "react";
import Card from "./card";
import "./order.css"
import Button from "./button";
import OrderItem from "./order_item";

interface OrderItem {
    image: string
    name: string
    price: number
    desc: string
    qnt: number
}

interface OrderProps {
    order: {
        id: number,
        items: OrderItem[],
    }
    table_number: number,
}

function markDone(order: OrderProps){
    fetch("http://localhost:3000/api/orders/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: order.order.id,
            table_number: order.table_number,
            state: "DONE",
            menu_items: []
        })
    });
    setTimeout(() => window.location.reload(), 100);
}

export default function Order(props: OrderProps) {
    const [open, setOpen] = useState(false);
    let total = 0;
    
    props.order.items.forEach((e) => {
        total = total + e.qnt * e.price;
    })

    return <div>
        <Card className={"served-order"}>
            <span className="served-order-number">Pedido #{props.order.id}</span>
            <div className="served-order-controls">
                <div className="served-order-table-number">
                    <span>{props.table_number}</span>
                    <img src="table.png" />
                </div>
                <Button onClick={() => { setOpen(!open) }}>{open ? "Close" : "Open"}</Button>
            </div>
        </Card>
        <Card className={"served-order-details " + (open ? "" : "served-hidden")}>
            <div className="served-items">
                {props.order.items.map((item, i) => <OrderItem key={i} item={item}/>)}
            </div>
            <div className="served-total">
                R$ {total.toFixed(2)}
            </div>
            <div className="served-mark-done">
                <Button onClick={() => markDone(props)}>Concluir</Button>
            </div>
        </Card>
    </div>
}