import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {isLoadingSelector} from 'src/app/products-list/store/selectors';
import {getProductsListAction} from 'src/app/products-list/store/actions/get-products-list.action';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {

    isLoading$: Observable<boolean>;

    constructor(
        private store: Store
    ) {}

    ngOnInit(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));

        this.fetchData();
    }

    fetchData(): void {
        this.store.dispatch(getProductsListAction())
    }
}
