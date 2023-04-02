import { configureStore, AnyAction } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// combinedReducers for each features
import combinedReducer from '@/store/combinedReducers';

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
} as any);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
