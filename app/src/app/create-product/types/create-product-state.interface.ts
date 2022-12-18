import {ProductInterface} from 'src/app/shared/types/product.interface';
import {ServerErrorsInterface} from 'src/app/shared/types/server-errors.interface';

export interface CreateProductStateInterface {
    isSubmitted: boolean;
    isSuccess: boolean;
    data: ProductInterface;
    errors: ServerErrorsInterface;
}
