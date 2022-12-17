import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProductsListComponent} from 'src/app/products-list/components/products-list/products-list.component';

const routes = [
    {
        path: '',
        component: ProductsListComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ProductsListComponent],
    providers: []
})
export class ProductsListModule {
}
