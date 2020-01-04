import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers'

export default createStore(
    reducer, composeWithDevTools()
);
