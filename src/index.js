import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import counterReducer from './store/counterReducer';
import resultsReducer from './store/resultsReducer';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
