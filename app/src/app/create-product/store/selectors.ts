import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AppStateInterface} from 'src/app/shared/types/app-state.interface';
import {CreateProductStateInterface} from 'src/app/create-product/types/create-product-state.interface';

export const productsListFeatureSelector = createFeatureSelector<AppStateInterface, CreateProductStateInterface>(
    'createProduct'
);

export const isSubmittedSelector = createSelector(
    productsListFeatureSelector,
    (state: CreateProductStateInterface) => state.isSubmitted
);

export const serverErrorsSelector = createSelector(
    productsListFeatureSelector,
    (state: CreateProductStateInterface) => state.errors
);
