import get from 'lodash/get';

export const formatCurrenciesResponse = (response) => {
  const currencies = get(response, 'result', {});

  return Object.values(currencies);
};
