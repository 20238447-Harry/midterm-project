import { Product } from "../models/product";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Product[] = [
{
    id:1,
    name:'Laptop',
    category:'Electronics',
    price:45000,
    stock:10,
    status:'Available',
    description:'High performance laptop',
    brand:'Dell',
    rating:4.5,
    supplier:'TechSupply'
},

{
    id:2,
    name:'Smartphone',
    category:'Electronics',
    price:25000,
    stock:0,
    status:'Out of Stock',
    description:'Latest Android smartphone',
    brand:'Samsung',
    rating:4.7,
    supplier:'MobileHub'
},

{
    id:3,
    name:'Headphones',
    category:'Accessories',
    price:1500,
    stock:20,
    status:'Available',
    description:'Noise cancelling headphones',
    brand:'Sony',
    rating:4.3,
    supplier:'AudioWorld'
},

{
    id:4,
    name:'Keyboard',
    category:'Accessories',
    price:900,
    stock:5,
    status:'Limited',
    description:'Mechanical keyboard',
    brand:'Logitech',
    rating:4.4,
    supplier:'TechSupply'
},

{
    id:5,
    name:'Monitor',
    category:'Electronics',
    price:12000,
    stock:8,
    status:'Available',
    description:'24 inch LED monitor',
    brand:'LG',
    rating:4.6,
    supplier:'ScreenTech'
},

{
    id:6,
    name:'Mouse',
    category:'Accessories',
    price:500,
    stock:15,
    status:'Available',
    description:'Wireless mouse',
    brand:'Logitech',
    rating:4.2,
    supplier:'TechSupply'
},

{
    id:7,
    name:'Printer',
    category:'Office',
    price:8000,
    stock:3,
    status:'Limited',
    description:'All in one printer',
    brand:'HP',
    rating:4.1,
    supplier:'OfficeHub'
},

{
    id:8,
    name:'Tablet',
    category:'Electronics',
    price:15000,
    stock:7,
    status:'Available',
    description:'10 inch tablet',
    brand:'Lenovo',
    rating:4.3,
    supplier:'MobileHub'
},

{
    id:9,
    name:'Speaker',
    category:'Audio',
    price:2000, 
    stock:0,
    status:'Out of Stock',
    description:'Bluetooth speaker',
    brand:'JBL',
    rating:4.6,
    supplier:'AudioWorld'
},

{
    id:10,
    name:'Webcam',
    category:'Accessories',
    price:1200,
    stock:12,
    status:'Available',
    description:'HD webcam',
    brand:'Logitech',
    rating:4.4,
    supplier:'TechSupply'
  }
]

  selectedProduct: Product | null = null;

  getProducts(): Product[] {
    return this.products;
  }

  getProductsById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  updateProduct(updated: Product): void {
    const idx = this.products.findIndex(e => e.id === updated.id);
    if (idx !== -1) {
      this.products[idx] = { ...updated };
    }
  }

}