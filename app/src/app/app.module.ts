import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {environment} from 'src/environments/environment';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from 'src/app/app-routing.module';
import {AppComponent} from 'src/app/app.component';
import {ProductsListModule} from './products_list/products_list.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),

        ProductsListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
