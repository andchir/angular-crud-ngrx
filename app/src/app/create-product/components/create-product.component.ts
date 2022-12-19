import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Observable, Subject, takeUntil} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {ProductInterface} from 'src/app/shared/types/product.interface';
import {createProductAction} from 'src/app/create-product/store/actions/create-product.action';
import {isSubmittedSelector, isSuccessSelector, serverErrorsSelector} from 'src/app/create-product/store/selectors';
import {ServerErrorsInterface} from 'src/app/shared/types/server-errors.interface';
import {ProductFormComponent} from 'src/app/shared/modules/product-form/components/product-form.component';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductComponent implements OnInit, OnDestroy {

    @ViewChild('productForm') productForm: ProductFormComponent;

    isSubmitted$: Observable<boolean>;
    isSuccess$: Observable<boolean>;
    serverErrors$: Observable<ServerErrorsInterface>;
    destroyed$ = new Subject<void>();

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector));
        this.isSuccess$ = this.store.pipe(select(isSuccessSelector));
        this.serverErrors$ = this.store.pipe(select(serverErrorsSelector));

        this.isSuccess$
            .pipe(takeUntil(this.destroyed$))
            .subscribe({
                next: (isSuccess) => {
                    if (isSuccess) {
                        this.productForm.resetForm();
                    }
                }
            });
    }

    onSubmit(product: ProductInterface): void {
        this.store.dispatch(createProductAction({data: product}));
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
