import get from 'lodash/get';

export const getCurrency = (props) =>  get(props, ['match', 'params'], {});
export const getActiveCurrencyName = (props) => get(getCurrency(props), 'currencyName', '');
export const getActiveCurrencyBase = (props) => get(getCurrency(props), 'currencyBase', '');

export const getCurrencyState = (state) => get(state, 'currencies', {});
export const getCurrenciesPairs = (state) => get(getCurrencyState(state), 'pairs', {});
export const getActiveCurrencyPairs = (state, props) => {
  const base = getActiveCurrencyBase(props);

  return get(getCurrenciesPairs(state), base, []);
};
