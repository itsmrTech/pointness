import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homePageSaga } from './saga';
import { HomePageState } from './types';

export const initialState: HomePageState = {
  items: Array(0),
};

const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    getAllItems(state, action: PayloadAction<any>) {},
    itemsFetched(state, action: PayloadAction<any>) {
      state.items = action.payload;
    },
    updateItem(state, action: PayloadAction<any>) {},
    itemUpdated(state, action: PayloadAction<any>) {
      let ind = state.items.findIndex(a => a.id === action.payload.id);
      if (ind >= 0) state.items[ind] = action.payload;
      else state.items.push(action.payload);
    },
    addItem(state, action: PayloadAction<any>) {},
    itemAdded(state, action: PayloadAction<any>) {
      state.items = action.payload;
    },
  },
});

export const { actions: homePageActions } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homePageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useHomePageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
