import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {GetProductsListResponseInterface} from 'src/app/products-list/types/get-products-list-response.interface';
import {SuccessResponseInterface} from 'src/app/shared/types/success-response.interface';

@Injectable()
export class ProductsListInterceptor implements HttpInterceptor {

    intercept(
        request: HttpRequest<GetProductsListResponseInterface>,
        next: HttpHandler
    ): Observable<HttpEvent<GetProductsListResponseInterface|SuccessResponseInterface>> {

        // Simulating a product delete server response
        if (request.method === 'DELETE') {
            const deleteResponse = new HttpResponse<SuccessResponseInterface>({
                body: {
                    success: true
                }
            });
            return of(deleteResponse);
        }

        // Simulating a server response for a list of products
        const response = new HttpResponse<GetProductsListResponseInterface>({
            body: {
                items: [
                    {
                        id: 1,
                        title: 'Product Name 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dui ' +
                            'odio. Integer ante magna, interdum id aliquet id, accumsan sit amet urna. Nam eu mauris ' +
                            'eget purus consequat blandit.',
                        brand: 'Adidas',
                        price: 100
                    },
                    {
                        id: 2,
                        title: 'Product Name 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dui ' +
                            'odio. Integer ante magna, interdum id aliquet id, accumsan sit amet urna. Nam eu mauris ' +
                            'eget purus consequat blandit.',
                        brand: 'Nike',
                        price: 150
                    },
                    {
                        id: 3,
                        title: 'Product Name 3',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dui ' +
                            'odio. Integer ante magna, interdum id aliquet id, accumsan sit amet urna. Nam eu mauris ' +
                            'eget purus consequat blandit.',
                        brand: 'Nike',
                        price: 180
                    }
                ],
                total: 0
            }
        });
        return of(response);
    }
}
