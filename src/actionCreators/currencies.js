import { createAction } from 'redux-actions';
import * as CurrenciesActionsTypes from 'actionTypes/currencies';

export const updateCurrencies = createAction(CurrenciesActionsTypes.FETCH_CURRENCIES_SUCCESS);
