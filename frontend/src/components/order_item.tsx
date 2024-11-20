"use client"

import Card from "./card";
import "./order_item.css"

interface OrderItem  {
    image: string
    name:string
    price:number
    desc:string
    qnt:number
}

interface OrderItemProps {
    item: OrderItem
}

export default function OrderItem(props: OrderItemProps) {
    return <Card className={"order-item"}>
        <div className="order-item-content">
            <img className="order-item-icon" src={props.item.image} alt="" />
            <div className="order-item-info">
                <div className="order-item-name-value">
                    <span>{props.item.name}</span>
                    <span>R$ {props.item.price.toFixed(2)}</span>
                </div>
                <span className="order-item-desc">{props.item.desc}</span>
                <div className="order-item-qnt">
                    <span>{props.item.qnt}</span>
                </div>
            </div>
        </div>
    </Card>
}