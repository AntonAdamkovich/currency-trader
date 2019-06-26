import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import currencies from './currencies';

export default (history) => combineReducers({
  router: connectRouter(history),
  currencies,
})
