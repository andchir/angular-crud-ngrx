import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {ProductInterface} from 'src/app/shared/types/product.interface';
import {createProductAction} from 'src/app/create-product/store/actions/create-product.action';
import {isSubmittedSelector, serverErrorsSelector} from 'src/app/create-product/store/selectors';
import {ServerErrorsInterface} from "../../shared/types/server-errors.interface";

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductComponent implements OnInit {

    isSubmitted$: Observable<boolean>;
    serverErrors$: Observable<ServerErrorsInterface>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector));
        this.serverErrors$ = this.store.pipe(select(serverErrorsSelector));
    }

    onSubmit(product: ProductInterface): void {
        this.store.dispatch(createProductAction({data: product}));
    }
}
