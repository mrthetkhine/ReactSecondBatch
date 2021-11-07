import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import movieReducer from '../features/movie/movieSlice';
import reviewReducer from '../features/review/reviewSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    movies:movieReducer,
    review: reviewReducer,
    auth :authReducer
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
