import {createReducer, on, Action} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store';

import {CreateProductStateInterface} from 'src/app/create-product/types/create-product-state.interface';
import {
    createProductAction,
    createProductFailureAction,
    createProductSuccessAction
} from './actions/create-product.action';

const initialState: CreateProductStateInterface = {
    isSubmitted: false,
    errors: null,
    data: null
}

const createProductReducer = createReducer(
    initialState,
    on(
        createProductAction,
        (state): CreateProductStateInterface => ({
            ...state,
            isSubmitted: true,
            errors: null,
            data: null
        })
    ),
    on(
        createProductSuccessAction,
        (state, action): CreateProductStateInterface => ({
            ...state,
            isSubmitted: false,
            errors: null,
            data: action.data
        })
    ),
    on(
        createProductFailureAction,
        (state, action): CreateProductStateInterface => ({
            ...state,
            isSubmitted: false,
            errors: action.errors,
            data: null
        })
    ),
    on(routerNavigationAction, (): CreateProductStateInterface => initialState)
);

export function reducers(state: CreateProductStateInterface, action: Action) {
    return createProductReducer(state, action);
}
