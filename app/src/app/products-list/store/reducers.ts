import {createReducer, on, Action} from '@ngrx/store';
import {routerNavigationAction} from '@ngrx/router-store';

import {ProductsListStateInterface} from 'src/app/products-list/types/products-list-state.interface';
import {
    getProductsListAction,
    getProductsListFailureAction,
    getProductsListSuccessAction
} from 'src/app/products-list/store/actions/get-products-list.action';
import {deleteProductSuccessAction} from 'src/app/products-list/store/actions/delete-product.action';

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
    on(
        deleteProductSuccessAction,
        (state, action): ProductsListStateInterface => {
            const items = state.data.items.filter((item) => {
                return item.id !== action.itemId;
            });
            return {
                ...state,
                data: {items, total: state.data.total - 1}
            };
        }
    ),
    on(routerNavigationAction, (): ProductsListStateInterface => initialState)
);

export function reducers(state: ProductsListStateInterface, action: Action) {
    return productsListReducer(state, action);
}
