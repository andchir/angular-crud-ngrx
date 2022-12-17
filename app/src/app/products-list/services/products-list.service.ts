import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {GetProductsListResponseInterface} from 'src/app/products-list/types/get-products-list-response.interface';

@Injectable()
export class ProductsListService {
    constructor(private http: HttpClient) {}

    getProductsList(url: string): Observable<GetProductsListResponseInterface> {
        return this.http.get<GetProductsListResponseInterface>('products')
    }
}
