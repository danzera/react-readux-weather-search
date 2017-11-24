import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// importing middleware library for Redux to handle AJAX requests
// redux-promise will look at all actions to see if the payload is a Promise
// if it is, it will halt the action until the Promise is resolved
// once the Promise is fulfilled, a new action is created with the resolved/rejected value
// if the Promise is resolved, the payload of the new action will be the resolved value
// if the Promise is rejected, the payload of the new action will be the rejected value AND the new action will have a key-value pair on it of "error: true"
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// bolierplate that hooks up middleware for Redux
// just need to drop middleware function(s) as params into applyMiddleware(___)
// this hoooks middleware into our Redux process
// i.e. actions will pass through this middleware and have a chance to do something based on the action (or not)
// -- OCCURS BEFORE THE ACTION IS PASSED ON TO THE REDUCERS
// middleware has the ability to block actions from reaching the reducers
// can also modify or pass actions through as-is to reducers
// MAIN POINTS
// 1. All actions we create flow through the middleware step before actions are sent to the reducers
// 2. Middleware can block actions, modify actions or let them pass on as-is
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
