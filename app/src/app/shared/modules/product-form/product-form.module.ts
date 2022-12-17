import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {ProductFormComponent} from 'src/app/shared/modules/product-form/components/product-form.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductFormComponent],
    exports: [ProductFormComponent]
})
export class ProductFormModule {}
