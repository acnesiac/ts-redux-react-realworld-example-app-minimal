import { Action, configureStore } from '@reduxjs/toolkit';
import app from '../components/App/App.slice';
import home from '../components/Pages/Home/Home.slice';


const middlewareConfiguration = { serializableCheck: false };

export const store = configureStore({
  reducer: { app, home },
  devTools: {
    name: 'Demo',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfiguration),
});
export type State = ReturnType<typeof store.getState>;

export function dispatchOnCall(action: Action) {
  return () => store.dispatch(action);
}
