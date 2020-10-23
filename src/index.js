import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import counterReducer from './store/counterReducer';
import resultsReducer from './store/resultsReducer';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log(action);
            const result = next(action);
            console.log(store.getState())
            return(result);
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
