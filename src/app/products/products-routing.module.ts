import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  { path: '', component: ProductsComponent },
  { path: '', component: ProductsComponent },
  { path: '', component: ProductsComponent },
  { path: '', component: ProductsComponent },
  { path: '', component: ProductsComponent },
  { path: '', component: ProductsComponent },
  { path: '', component: ProductsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
