import {createAction, props} from '@ngrx/store';

import {ActionTypes} from 'src/app/products-list/store/action-types';
import {SuccessResponseInterface} from 'src/app/shared/types/success-response.interface';

export const deleteProductAction = createAction(
    ActionTypes.DELETE_PRODUCT,
    props<{itemId: number}>()
);

export const deleteProductSuccessAction = createAction(
    ActionTypes.DELETE_PRODUCT_SUCCESS,
    props<{itemId: number, data: SuccessResponseInterface}>()
);

export const deleteProductFailureAction = createAction(
    ActionTypes.DELETE_PRODUCT_FAILURE
);
