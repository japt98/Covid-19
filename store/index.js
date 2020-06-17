import {createStore, compose, applyMiddleware} from 'redux';
import reduxSaga from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = reduxSaga();

const store = createStore(
     reducer,
     compose(
          applyMiddleware(sagaMiddleware),
          typeof window === 'object' &&
               typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'  ?
                    window.__REDUX_DEVTOOLS_EXTENSION__()
               : f => f
     )
)

sagaMiddleware.run(rootSaga);

export default store;