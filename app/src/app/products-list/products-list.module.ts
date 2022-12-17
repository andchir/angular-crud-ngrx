import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';

import {ProductsListComponent} from 'src/app/products-list/components/products-list/products-list.component';
import {reducers} from './store/reducers';
import {ProductsListService} from './services/products-list.service';

const routes = [
    {
        path: '',
        component: ProductsListComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('productsList', reducers)
    ],
    declarations: [ProductsListComponent],
    providers: [ProductsListService]
})
export class ProductsListModule {
}
