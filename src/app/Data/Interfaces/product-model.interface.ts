export interface product_model {
  id: number;
  title : string | null;
  description : string | null;
  idManufacturer : number;
  price : number;
  countInStock : number;
  idCategory : number;
}
