"use client"

import AppBar from "@/components/appbar";
import MenuItem from "@/components/menu_item";

import "./page.css"

async function sendToKitchen(data: any, number: number){
    await fetch("http://localhost:3000/api/orders/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            table_number: number
        })
    }).then(async e => {
        let registeredId = await e.json();
        // @ts-ignore
        data.map((cart,id) => {
            if(cart){
                fetch(`http://localhost:3000/api/orders/${registeredId.id}/add_item`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item_id: id,
                        quantity: cart.count
                    })
                })
            }
        })
    })


    setTimeout(() => {
        localStorage.removeItem("cart");
        window.location.reload()
    }, 200);
}


export default function Page() {

    let data = JSON.parse(localStorage.getItem("cart") || "[]");
    let number = parseInt(localStorage.getItem("tbl_number") || "1");

    return <div>
        <AppBar hasCart/>
        <div>
            <div className="served-cart-category">
                Items
            </div>
            {      // @ts-ignore
                data.map((cart, id) => {
                    if (cart && cart.count > 0) {
                        return fetch(`http://localhost:3000/api/menu_items/${id}`).then(
                            (e) => e.json()
                        ).then(
                            (item) =>
                                <MenuItem count={cart.count} key={item.id} item={
                                    {
                                        id: item.id,
                                        img: item.image,
                                        name: item.name,
                                        desc: item.description,
                                        value: item.price
                                    }
                                }/>
                        )
                    }
                })
            }
            <button className="fab-served-order" onClick={(e) => sendToKitchen(data,number)}>
                <img className="fab-served-order-image" src="arrow-forward.png"/>
            </button>
        </div>
    </div>
}