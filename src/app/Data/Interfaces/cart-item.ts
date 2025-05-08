export class CartItem {
  public id: number;
  public count: number;
  public price: number = 0;

  constructor(id: number, count: number) {
    this.id = id;
    this.count = count;
  }
}
