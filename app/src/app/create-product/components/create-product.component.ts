import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ProductInterface} from 'src/app/shared/types/product.interface';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductComponent {


    onSubmit(product: ProductInterface): void {

        console.log('onSubmit', product);

    }
}
