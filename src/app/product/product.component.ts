import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'C091';
  fontSize = 14;
  product: Product = {};
  constructor() {
  }

  ngOnInit(): void {
  }
  changeSize(value: any): void{
    this.fontSize = value;
  }
}
