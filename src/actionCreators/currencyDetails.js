import { createAction } from 'redux-actions';
import * as ActionTypes from 'actionTypes/currencyDetails';

export const requestCurrencyDetails = createAction(ActionTypes.CURRENCY_DETAILS_REQUEST);
