import {ServerErrorsInterface} from 'src/app/shared/types/server-errors.interface';
import {GetProductsListResponseInterface} from './get-products-list-response.interface';

export interface ProductsListStateInterface {
    isLoading: boolean;
    errors: ServerErrorsInterface;
    data: GetProductsListResponseInterface;
}
