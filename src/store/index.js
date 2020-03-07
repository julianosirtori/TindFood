import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducers';

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(console.tron.createEnhancer())
  : applyMiddleware([]);

export default createStore(reducer, enhancer);
