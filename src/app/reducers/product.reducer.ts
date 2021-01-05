// product.reducer.ts

import { Product } from './../product/product.model';
import { Action } from '@ngrx/store';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProductReducer(state: Product[] = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(state);

        return [...state, action.payload];
    default:
        return state;
    }
}
