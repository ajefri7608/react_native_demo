import { configureStore, applyMiddleware} from '@reduxjs/toolkit'
import counterReducer from '../slice/counterSlice'
import loginBoxReducer from '../slice/loginBoxSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    counter: counterReducer,
    loginBox: loginBoxReducer
  },
  middleware: [sagaMiddleware]
},)

sagaMiddleware.run(rootSaga)

