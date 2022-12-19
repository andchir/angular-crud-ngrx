import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

const routes = [

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([])
        // StoreModule.forFeature('product', reducers)
    ],
    declarations: [],
    providers: [

    ]
})
export class ProductsListModule {
}
