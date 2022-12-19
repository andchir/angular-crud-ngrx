import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ProductsListService} from 'src/app/products-list/services/products-list.service';
import {ProductsListComponent} from 'src/app/products-list/components/products-list/products-list.component';
import {reducers} from 'src/app/products-list/store/reducers';
import {GetProductsListEffect} from 'src/app/products-list/store/effects/get-products-list.effect';
import {ProductsListInterceptor} from 'src/app/products-list/interceptors/products-list.interceptor';
import {DeleteProductEffect} from 'src/app/products-list/store/effects/delete-product.effect';

const routes = [
    {
        path: '',
        component: ProductsListComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([GetProductsListEffect, DeleteProductEffect]),
        StoreModule.forFeature('productsList', reducers)
    ],
    declarations: [ProductsListComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ProductsListInterceptor,
            multi: true
        },
        ProductsListService
    ]
})
export class ProductsListModule {
}
