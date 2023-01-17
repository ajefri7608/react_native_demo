import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import counterReducer from '~/redux/slice/counterSlice';
import userReducer from '~/redux/slice/userSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '~/redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
