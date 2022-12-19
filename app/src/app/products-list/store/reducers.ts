import {createReducer, on, Action} from '@ngrx/store';
import {routerNavigationAction} from '@ngrx/router-store';

import {ProductsListStateInterface} from 'src/app/products-list/types/products-list-state.interface';
import {
    getProductsListAction,
    getProductsListFailureAction,
    getProductsListSuccessAction
} from './actions/get-products-list.action';

const initialState: ProductsListStateInterface = {
    isLoading: false,
    errors: null,
    data: null
}

const productsListReducer = createReducer(
    initialState,
    on(
        getProductsListAction,
        (state): ProductsListStateInterface => ({
            ...state,
            isLoading: true,
            data: null,
            errors: null
        })
    ),
    on(
        getProductsListSuccessAction,
        (state, action): ProductsListStateInterface => ({
            ...state,
            isLoading: false,
            data: action.data
        })
    ),
    on(
        getProductsListFailureAction,
        (state, action): ProductsListStateInterface => ({
            ...state,
            isLoading: false,
            errors: action.errors
        })
    ),
    on(routerNavigationAction, (): ProductsListStateInterface => initialState)
);

export function reducers(state: ProductsListStateInterface, action: Action) {
    return productsListReducer(state, action);
}
