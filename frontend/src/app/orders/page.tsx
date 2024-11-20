

import AppBar from "@/components/appbar";
import Order from "@/components/order";

export default function Page() {
    let promise =  fetch("http://localhost:3000/api/orders").then(res => res.json());
    // @ts-ignore
    return <div>
        <AppBar/>
        {
            promise.then(e =>
                // @ts-ignore
                e.map(async (item,id) => {
                    if(item.state != "DONE") {
                        let itemData = await fetch(`http://localhost:3000/api/orders/${item.id}/get_items`).then(async (res) => await res.json())


                        return <Order
                            key={id}
                            table_number={item.table_number}
                            order={{
                                id: item.id,
                                items: await itemData
                            }}
                        />
                    }
                })
            )
        }
    </div>
}