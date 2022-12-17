import {ProductInterface} from 'src/app/shared/types/product.interface';

export interface GetProductsListResponseInterface {
    items: ProductInterface[];
    total: number;
}
