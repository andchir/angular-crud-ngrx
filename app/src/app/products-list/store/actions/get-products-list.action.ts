import {createAction, props} from '@ngrx/store'

import {ActionTypes} from 'src/app/products-list/store/action-types';
import {GetProductsListResponseInterface} from 'src/app/products-list/types/get-products-list-response.interface';

export const getProductsListAction = createAction(
    ActionTypes.GET_PRODUCTS_LIST
);

export const getProductsListSuccessAction = createAction(
    ActionTypes.GET_PRODUCTS_LIST_SUCCESS,
    props<{result: GetProductsListResponseInterface}>()
);

export const getProductsListFailureAction = createAction(
    ActionTypes.GET_PRODUCTS_LIST_FAILURE
);
