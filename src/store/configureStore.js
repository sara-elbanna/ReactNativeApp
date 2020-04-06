import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../store/reducers/index';
import ReduxThunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { loadingBarMiddleware } from 'react-redux-loading-bar';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist : ['Authentication','generalInfo']
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
//   let store = createStore(persistedReducer,applyMiddleware(ReduxThunk ,loadingBarMiddleware()))
  let store = createStore(rootReducer,applyMiddleware(ReduxThunk))

//   let persistor = persistStore(store)
  return store 
}
