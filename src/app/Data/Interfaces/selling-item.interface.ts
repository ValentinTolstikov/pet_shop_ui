export class selling_item {
  id: number;
  image : string | null;
  description : string;
  price : number;
  name : string;

  constructor(Id:number, image:string,description:string,price:number, name : string) {
    this.id = Id;
    this.image = image;
    this.description = description;
    this.price = price;
    this.name = name;
  }
}
