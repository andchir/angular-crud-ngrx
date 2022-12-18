import {ProductsListStateInterface} from 'src/app/products-list/types/products-list-state.interface';
import {CreateProductStateInterface} from 'src/app/create-product/types/create-product-state.interface';

export interface AppStateInterface {
    productsList: ProductsListStateInterface,
    createProduct: CreateProductStateInterface
}
