import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { addProductReducer } from './reducers/product.reducer';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({product: addProductReducer}),
    //StoreModule.forRoot({ count: counterReducer }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
