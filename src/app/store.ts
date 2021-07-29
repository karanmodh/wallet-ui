import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {searchReducer} from '../features/repo_search/SearchReducer';
import { walletReducer } from '../features/wallet/reducers/walletReducer';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    wallet: walletReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
