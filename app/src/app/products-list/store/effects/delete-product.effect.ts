import {Injectable} from '@angular/core';

import {of} from 'rxjs';
import {map,catchError, switchMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {ProductsListService} from 'src/app/products-list/services/products-list.service';
import {
    deleteProductAction,
    deleteProductFailureAction,
    deleteProductSuccessAction
} from 'src/app/products-list/store/actions/delete-product.action';
import {SuccessResponseInterface} from 'src/app/shared/types/success-response.interface';

@Injectable()
export class DeleteProductEffect {

    deleteProduct$ = createEffect(() => this.actions$.pipe(
        ofType(deleteProductAction),
        switchMap(({itemId}) => {
            return this.productsListService.deleteItem(itemId).pipe(
                map((data: SuccessResponseInterface) => {
                    return deleteProductSuccessAction({itemId, data});
                }),
                catchError(() => {
                    return of(deleteProductFailureAction())
                })
            );
        })
    ));

    constructor(
        private actions$: Actions,
        private productsListService: ProductsListService
    ) {}
}
