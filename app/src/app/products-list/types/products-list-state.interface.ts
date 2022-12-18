import {ProductInterface} from 'src/app/shared/types/product.interface';
import {ServerErrorsInterface} from "../../shared/types/server-errors.interface";

export interface ProductsListStateInterface {
    isLoading: boolean;
    errors: ServerErrorsInterface;
    data: ProductInterface[];
}
