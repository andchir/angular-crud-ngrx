import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ProductInterface} from 'src/app/shared/types/product.interface';
import {ServerErrorsInterface} from 'src/app/shared/types/server-errors.interface';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit, OnChanges {

    @Input('initialValues') initialValues: ProductInterface;
    @Input('isSubmitted') isSubmitted: boolean;
    @Input('errors') errors: ServerErrorsInterface | null;
    @Output('formSubmit') formSubmit = new EventEmitter<ProductInterface>();

    form: FormGroup;

    get formFields(): {[key: string]: AbstractControl<any>} {
        return this.form.controls;
    }

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formInit();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['errors']) {
            this.formUpdateErrors();
        }
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

    formUpdateErrors(): void {
        if (!this.form) {
            return;
        }
        Object.keys(this.form.controls).forEach(key => {
            (this.form.get(key) as FormControl).setErrors(this.errors && this.errors[key]
                ? {incorrect: this.errors[key]}
                : null
            );
        });
    }

    resetForm(): void {
        if (this.form) {
            this.form.reset();
        }
    }
}
