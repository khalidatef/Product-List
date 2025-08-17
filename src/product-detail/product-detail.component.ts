import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { IproductService } from '../iproduct.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ CurrencyPipe ,TitleCasePipe ,RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Iproduct | undefined;
  categoryName: string = '';
  constructor(
    private _productService: IproductService,
    private _router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._router.params.subscribe((params) => {
      const productId = +params['productId'];
      this.categoryName = params['categoryName'];
      this.product = this._productService.getProductById(productId);
    });
  }
}
