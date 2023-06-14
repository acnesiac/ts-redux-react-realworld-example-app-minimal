import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
  selectedTab: string;
  tags: string[]

}

const initialState: HomeState = {
  selectedTab: 'Home tab',
  tags: []
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    startLoadingTags: () => initialState,
    loadTags: (state, { payload: tags }: PayloadAction<string[]>) => {
      state.tags = tags;
    },
    changeTab: (state, { payload: tab }: PayloadAction<string>) => {
      state.selectedTab = tab;
    },
  },
});

export const { startLoadingTags, loadTags, changeTab } = slice.actions;

export default slice.reducer;
