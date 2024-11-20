"use client"
import AppBar from "@/components/appbar"
import MenuItem from "@/components/menu_item"

export default function Page() {

  let cart_data = JSON.parse(localStorage.getItem("cart") || "[]");

  return <div>
    <AppBar hasCart/>
    {

      fetch("http://localhost:3000/api/menu_items").then(e => e.json()).then(
          // @ts-ignore
          data => data.map(item =>
          <MenuItem key={item.id} count={cart_data[item.id] ? cart_data[item.id].count : 0} item={
            {
              id: item.id,
              img: item.image,
              name: item.name,
              desc: item.description,
              value: item.price
            }
          } />)
      )}
  </div>
}
