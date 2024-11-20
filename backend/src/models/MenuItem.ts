export class MenuItem {
  id?: number;
  image: string;
  name: string;
  description: string;
  price: number;

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    price: number,
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
