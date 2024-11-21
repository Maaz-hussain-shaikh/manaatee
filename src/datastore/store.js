import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import paginationReducer from './paginationReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  pagination: paginationReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
      
    )
  );

export default store;
