// src/app/app.state.ts

import { Product } from './product/product.model';

export interface AppState {
  readonly product: Product[];
}
