import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {of} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {ProductsListService} from 'src/app/products-list/services/products-list.service';
import {
    getProductsListAction,
    getProductsListFailureAction,
    getProductsListSuccessAction
} from 'src/app/products-list/store/actions/get-products-list.action';
import {GetProductsListResponseInterface} from 'src/app/products-list/types/get-products-list-response.interface';

@Injectable()
export class GetProductsListEffect {

    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(getProductsListAction),
        switchMap(() => {
            return this.productsListService.getProductsList().pipe(
                map((data: GetProductsListResponseInterface) => {
                    return getProductsListSuccessAction({data});
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(getProductsListFailureAction({errors: errorResponse.error}))
                })
            );
        })
    ));

    constructor(
        private actions$: Actions,
        private productsListService: ProductsListService
    ) {}
}
