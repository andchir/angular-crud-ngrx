import {createAction, props} from '@ngrx/store'

import {ActionTypes} from 'src/app/products-list/store/action-types';
import {GetProductsListResponseInterface} from 'src/app/products-list/types/get-products-list-response.interface';
import {ServerErrorsInterface} from 'src/app/shared/types/server-errors.interface';

export const getProductsListAction = createAction(
    ActionTypes.GET_PRODUCTS_LIST
);

export const getProductsListSuccessAction = createAction(
    ActionTypes.GET_PRODUCTS_LIST_SUCCESS,
    props<{data: GetProductsListResponseInterface}>()
);

export const getProductsListFailureAction = createAction(
    ActionTypes.GET_PRODUCTS_LIST_FAILURE,
    props<{errors: ServerErrorsInterface}>()
);
