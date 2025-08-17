import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { IproductService } from '../iproduct.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Iproduct[] = [];
  categoryName: string = '';
  constructor(
    private _productService: IproductService,
    private _router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._router.params.subscribe((params) => {
      this.categoryName = params['categoryName'];
      this.products = this._productService.getProductsByCategory(
        this.categoryName
      );
    });
  }
}
