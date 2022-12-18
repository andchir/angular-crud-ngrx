import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ProductInterface} from 'src/app/shared/types/product.interface';

@Injectable()
export class CreateProductService {

    constructor(private http: HttpClient) {}

    createItem(item: ProductInterface): Observable<ProductInterface> {
        return this.http
            .post<ProductInterface>('products', item);
    }
}
