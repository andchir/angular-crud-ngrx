import {createFeatureSelector, createSelector} from '@ngrx/store';

import {ProductsListStateInterface} from 'src/app/products-list/types/products-list-state.interface';
import {AppStateInterface} from 'src/app/shared/types/app-state.interface';

export const productsListFeatureSelector = createFeatureSelector<AppStateInterface, ProductsListStateInterface>(
    'productsList'
);

export const isLoadingSelector = createSelector(
    productsListFeatureSelector,
    (state: ProductsListStateInterface) => state.isLoading
);
