import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { reducer as ProductListReducer } from './scenes/ProductsList/reducer';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
    productList: ProductListReducer,
});

export default createStore(
    appReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);
