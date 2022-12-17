import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ProductInterface} from 'src/app/shared/types/product.interface';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {

    @Input('initialValues') initialValues: ProductInterface;
    @Output('formSubmit') formSubmit = new EventEmitter<ProductInterface>();

    form: FormGroup;

    get formFields(): {[key: string]: AbstractControl<any>} {
        return this.form.controls;
    }

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formInit();
    }

    formInit(): void {
        this.form = this.fb.group({
            title: ['', Validators.required],
            brand: [''],
            description: ['', Validators.required],
            price: [0, Validators.required]
        });
    }

    onSubmit(): void {
        this.formGroupMarkTouched();
        if (this.form.invalid) {
            return;
        }
        this.formSubmit.emit(this.form.value);
    }

    formGroupMarkTouched(): void {
        Object.keys(this.form.controls).forEach(key => {
            (this.form.get(key) as FormControl).markAsTouched();
        });
    }
}
