import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, of, throwError} from 'rxjs';

import {ProductInterface} from 'src/app/shared/types/product.interface';

@Injectable()
export class SaveProductInterceptor implements HttpInterceptor {

    intercept(
        request: HttpRequest<ProductInterface>,
        next: HttpHandler
    ): Observable<HttpEvent<ProductInterface>> {
        const data = request.body;
        const response = new HttpResponse<ProductInterface>({// Simulate a server response
            body: {
                ...data,
                id: data.id || 1
            }
        });

        return Math.floor(Math.random() * 2)// Random response OR error
            ? of(response)
            : throwError(() => {
            return {
                title: 'Title random error for example.'
            };
        });
    }
}
