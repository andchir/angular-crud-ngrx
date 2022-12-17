import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CreateProductComponent} from 'src/app/create-product/components/create-product.component';
import {ProductFormModule} from 'src/app/shared/modules/product-form/product-form.module';

const routes = [
    {
        path: 'create-product',
        component: CreateProductComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        ProductFormModule
    ],
    declarations: [CreateProductComponent],
    providers: []
})
export class CreateProductModule {
}
