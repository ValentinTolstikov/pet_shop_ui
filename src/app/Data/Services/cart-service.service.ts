import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private products: Map<number,number> = new Map();

  constructor() {
  }

  public GetCartItems(): Map<number,number> {
    return this.products;
  }

  public ClearCart(){
    this.products = new Map();
    this.SaveCart();
  }

  public AddProductToCart(productId: number, quantity: number) {
    let pd = this.products;
    pd.set(productId, quantity);
    this.SaveCart();
  }

  public DeleteFromCart(productId: number) {
    this.products.delete(Number(productId));
    this.SaveCart();
  }

  public IsAddedToCart (productId: number): boolean {
    return this.products.has(Number(productId));
  }

  public SaveCart(){
    localStorage.setItem("cartItems",JSON.stringify(Array.from(this.products)));
  }

  public TryLoadFromLocalStorage() {
    let jsonData = localStorage.getItem("cartItems");

    if (jsonData !== null)
    {
      let parsedItems = JSON.parse(jsonData);
      this.products = new Map<number,number>(parsedItems);
    }
  }
}
