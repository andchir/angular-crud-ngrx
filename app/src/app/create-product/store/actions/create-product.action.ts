import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../action-types';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {ServerErrorsInterface} from 'src/app/shared/types/server-errors.interface';

export const createProductAction = createAction(
    ActionTypes.CREATE_PRODUCT,
    props<{data: ProductInterface}>()
)

export const createProductSuccessAction = createAction(
    ActionTypes.CREATE_PRODUCT_SUCCESS,
    props<{data: ProductInterface}>()
)

export const createProductFailureAction = createAction(
    ActionTypes.CREATE_PRODUCT_FAILURE,
    props<{errors: ServerErrorsInterface}>()
)
