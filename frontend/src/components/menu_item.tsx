"use client"

import { useState } from "react";
import Button from "./button";
import Card from "./card";
import "./menu_item.css"

interface MenuItem  {
    id: number
    img: string
    name:string
    value:number
    desc:string
}

interface MenuItemProps {
    item: MenuItem
    count?: number;
}

function storeCount(id:number, count: number) {
    let json = JSON.parse(localStorage.getItem("cart") || "[]");
    if(!json[id]) {
        json[id] = {};
    }
    json[id].count = count;
    localStorage.setItem("cart", JSON.stringify(json));
}

export default function MenuItem(props: MenuItemProps) {
    const [count, setCount] = useState(props.count || 0);

    return <Card className={"menu-item"}>
        <div className="menu-item-content">
            <img className="menu-item-icon" src={props.item.img} alt="" />
            <div className="menu-item-info">
                <div className="menu-item-name-value">
                    <span>{props.item.name}</span>
                    <span>R$ {props.item.value.toFixed(2)}</span>
                </div>
                <span className="menu-item-desc">{props.item.desc}</span>
            </div>
        </div>
        <div className="menu-item-footer">
            <Button onClick={() => {}}>Ver</Button>
            <div className="menu-item-qnt">
                <span>{count}</span>
            </div>
            <div className="menu-item-alter-qnt">
                <input onClick={() => {
                    setCount(count + 1)
                    storeCount(props.item.id,count + 1);
                }} type="button" value=" + " className="menu-item-alter-add"/>
                <input onClick={() => {
                    setCount(Math.max(count - 1,0))
                    storeCount(props.item.id,Math.max(count - 1,0));
                }} type="button" value=" - " className="menu-item-alter-sub"/>
            </div>
        </div>
    </Card>
}