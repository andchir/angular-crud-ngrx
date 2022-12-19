import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AppStateInterface} from 'src/app/shared/types/app-state.interface';
import {ProductsListStateInterface} from 'src/app/products-list/types/products-list-state.interface';

export const productsListFeatureSelector = createFeatureSelector<AppStateInterface, ProductsListStateInterface>(
    'productsList'
);

export const isLoadingSelector = createSelector(
    productsListFeatureSelector,
    (state: ProductsListStateInterface) => state.isLoading
);

export const dataSelector = createSelector(
    productsListFeatureSelector,
    (state: ProductsListStateInterface) => state.data
);
