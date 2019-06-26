import { call, put } from 'redux-saga/effects';
import mapValues from 'lodash/mapValues';
import groupBy from 'lodash/groupBy';
import uniqBy from 'lodash/uniqBy'
import take from 'lodash/take';

import * as CurrenciesActionCreators from 'actionCreators/currencies';
import { formatCurrenciesResponse } from 'formatters/currencies';

export default function* initializeSaga() {
  try {
    const currenciesRequest = yield call(fetch, '//127.0.0.1:3001/asset-pairs');
    const responseData = yield currenciesRequest.json();

    const currencies = yield call(formatCurrenciesResponse, responseData);

    const uniqCurrencies = yield call(uniqBy, currencies, 'base');
    const pairedCurrencies = yield call(groupBy, currencies, 'base');
    const randomizedCurrencies = yield call(mapValues, pairedCurrencies, (currencies) => take(currencies, 3));

    yield put(CurrenciesActionCreators.updateCurrencies({
      currencies: uniqCurrencies,
      pairs: randomizedCurrencies,
    }));

  } catch (error) {
    yield put(CurrenciesActionCreators.updateCurrencies({
      currencies: [],
      pairs: {}
    }));
  }
}
