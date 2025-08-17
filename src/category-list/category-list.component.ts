import { Component, OnInit } from '@angular/core';
import { IproductService } from '../iproduct.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [TitleCasePipe, RouterLinkActive, RouterLink, CurrencyPipe],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent implements OnInit {
  categories: string[] = [];
  product: Iproduct | undefined;
  categoryName: string = '';
  products: Iproduct[] = [];
  constructor(
    private _productservice: IproductService,
    private _router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.categories = this._productservice.getAllCategories();
    this.products = this._productservice.product;
    this._router.params.subscribe((params) => {
      const productId = +params['productId'];
      this.categoryName = params['categoryName'];
      this.product = this._productservice.getProductById(productId);
    });
  }
}
