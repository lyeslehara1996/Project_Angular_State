import { createAction, props } from '@ngrx/store';

export const yProductss = createAction(
  '[Products] Y Productss'
);

export const yProductssSuccess = createAction(
  '[Products] Y Productss Success',
  props<{ data: any }>()
);

export const yProductssFailure = createAction(
  '[Products] Y Productss Failure',
  props<{ error: any }>()
);
