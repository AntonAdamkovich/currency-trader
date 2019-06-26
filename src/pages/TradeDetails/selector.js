import {
  getActiveCurrencyName,
  getActiveCurrencyPairs,
} from 'selectors/tradeDetails';

export default function(state, props) {
  return {
    chooseCurrencyName: getActiveCurrencyName(props),
    pairedCurrencies: getActiveCurrencyPairs(state, props)
  }
}
