import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from 'src/shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { productDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id', 
        canActivate: [productDetailGuard],
        component: ProductDetailComponent },
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
