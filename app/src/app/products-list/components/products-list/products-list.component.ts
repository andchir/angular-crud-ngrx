import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {dataSelector, isLoadingSelector} from 'src/app/products-list/store/selectors';
import {getProductsListAction} from 'src/app/products-list/store/actions/get-products-list.action';
import {GetProductsListResponseInterface} from "../../types/get-products-list-response.interface";

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {

    isLoading$: Observable<boolean>;
    data$: Observable<GetProductsListResponseInterface>;

    constructor(
        private store: Store
    ) {}

    ngOnInit(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.data$ = this.store.pipe(select(dataSelector));

        this.fetchData();
    }

    fetchData(): void {
        this.store.dispatch(getProductsListAction())
    }
}
