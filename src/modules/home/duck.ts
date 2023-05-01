import { createReducer, createAction } from '@reduxjs/toolkit';

import type { Category } from '../../entities';

export type HomeState = {
  categoriesSelected: Category[];
};

const initialState: HomeState = {
  categoriesSelected: [],
};

//Actions
export const actions = {
  updateCategoriesSelected: createAction<string>('UpdateCategoriesSelected'),
};

const homeReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.updateCategoriesSelected, (state: HomeState, action) => {
    const category = action.payload;
    const csSelected = state.categoriesSelected;
    const exists = csSelected.includes(category);
    if (exists) {
      state.categoriesSelected = csSelected.filter((el) => el !== category);
    } else state.categoriesSelected = [...csSelected, category];
  });
});

export default homeReducer;
