import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {CreateProductService} from 'src/app/create-product/services/create-product.service';
import {
    createProductAction,
    createProductFailureAction,
    createProductSuccessAction
} from 'src/app/create-product/store/actions/create-product.action';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {ServerErrorsInterface} from "../../../shared/types/server-errors.interface";

@Injectable()
export class CreateProductEffect {

    createProduct$ = createEffect(() => this.actions$.pipe(
        ofType(createProductAction),
        switchMap(({data}) => {
            return this.dataService.createItem(data).pipe(
                map((data: ProductInterface) => {
                    return createProductSuccessAction({data});
                }),
                catchError((errorResult: ServerErrorsInterface) => {
                    return of(createProductFailureAction({errors: errorResult}));
                })
            );
        })
    ));

    constructor(
        private actions$: Actions,
        private dataService: CreateProductService
    ) {}
}
