export class OrderItem {
    id?: number
    id_order: number
    id_item: number
    qnt: number

    constructor(id: number, id_order: number, id_item: number, qnt: number) {
        this.id = id;
        this.id_order = id_order;
        this.id_item = id_item;
        this.qnt = qnt;
    }
}