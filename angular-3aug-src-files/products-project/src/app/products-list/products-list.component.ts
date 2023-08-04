import { Component } from '@angular/core';
import { Products } from './products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  productsList: Products[] = [
    new Products(12, "Car", 1000000, "Yes"),
    new Products(34, "Clock", 2000, "Yes"),
    new Products(56, "Phone", 30000, "Yes"),
    new Products(78, "Pen", 40, "No")
    ]
}
