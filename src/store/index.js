import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../store/todoSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

export default store