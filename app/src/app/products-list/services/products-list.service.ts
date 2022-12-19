import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {GetProductsListResponseInterface} from 'src/app/products-list/types/get-products-list-response.interface';

@Injectable()
export class ProductsListService {

    private baseUrl = '/products';

    constructor(private http: HttpClient) {}

    getProductsList(): Observable<GetProductsListResponseInterface> {
        return this.http.get<GetProductsListResponseInterface>(this.baseUrl)
    }

    deleteItem(itemId: number): Observable<any> {
        const url = `${this.baseUrl}/${itemId}`;
        return this.http.delete<any>(url);
    }
}
