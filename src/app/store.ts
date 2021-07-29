import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { walletReducer } from '../features/wallet/reducers/walletReducer';

export const store = configureStore({
  reducer: {
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
