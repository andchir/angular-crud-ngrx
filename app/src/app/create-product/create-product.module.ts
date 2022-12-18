import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {CreateProductComponent} from 'src/app/create-product/components/create-product.component';
import {ProductFormModule} from 'src/app/shared/modules/product-form/product-form.module';
import {reducers} from 'src/app/create-product/store/reducers';
import {CreateProductEffect} from 'src/app/create-product/store/effects/create-product.effect';
import {CreateProductService} from 'src/app/create-product/services/create-product.service';
import {SaveProductInterceptor} from 'src/app/shared/interceptors/save-product.interceptor';

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
        EffectsModule.forFeature([CreateProductEffect]),
        StoreModule.forFeature('createProduct', reducers),

        ProductFormModule
    ],
    declarations: [CreateProductComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SaveProductInterceptor,
            multi: true,
        },
        CreateProductService
    ]
})
export class CreateProductModule {
}
