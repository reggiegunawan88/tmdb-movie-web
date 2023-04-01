import { configureStore, AnyAction } from '@reduxjs/toolkit';

// combinedReducers for each features
import combinedReducer from '@/store/combinedReducers';

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: reducer,
} as any);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
