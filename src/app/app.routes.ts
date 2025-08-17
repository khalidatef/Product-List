import { Routes } from '@angular/router';
import { CategoryListComponent } from '../category-list/category-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: CategoryListComponent ,title:'Category-List'},
    { path: 'category/:categoryName', component: ProductListComponent },
    { path: 'category/:categoryName/product/:productId', component: ProductDetailComponent },
    {path:'**', component:NotFoundComponent, title:'Error 404 Not Found'}
];
