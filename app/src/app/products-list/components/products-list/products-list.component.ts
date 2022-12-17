import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {

}
