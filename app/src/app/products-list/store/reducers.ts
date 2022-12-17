import {createReducer, on, Action} from '@ngrx/store';
import {routerNavigationAction} from '@ngrx/router-store';

import {ProductsListStateInterface} from '../types/products-list-state.interface';
import {
    getProductsListAction,
    getProductsListFailureAction,
    getProductsListSuccessAction
} from './actions/get-products-list.action';

const initialState: ProductsListStateInterface = {
    isLoading: false,
    error: null
}

const productsListReducer = createReducer(
    initialState,
    on(
        getProductsListAction,
        (state): ProductsListStateInterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getProductsListSuccessAction,
        (state): ProductsListStateInterface => ({
            ...state,
            isLoading: false
        })
    ),
    on(
        getProductsListFailureAction,
        (state): ProductsListStateInterface => ({
            ...state,
            isLoading: false
        })
    ),
    on(routerNavigationAction, (): ProductsListStateInterface => initialState)
);

export function reducers(state: ProductsListStateInterface, action: Action) {
    return productsListReducer(state, action);
}
