import { isLoading, currenciesList} from 'selectors/currencies';

export default function(state) {
  return {
    currenciesList: currenciesList(state),
  }
}
