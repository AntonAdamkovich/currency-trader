import { push, goBack } from 'connected-react-router'
import * as Routes from 'constants/routing'

export const navigateToDetails = (currency) => push(`${Routes.TRADE_DETAILS_BASE}/${currency.base}/${currency.altname}`);
export const navigateBack = () => goBack();
