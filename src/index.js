import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// app component
import App from './App';

// React Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import createLogger from 'redux-logger';

// React Routing
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';

//bootstrap file
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let history = createHistory();
const store = createStore(
    reducers,
    applyMiddleware(createLogger, thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
