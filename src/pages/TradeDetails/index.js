import { connect } from 'react-redux';

import { requestCurrencyDetails } from 'actionCreators/currencyDetails';
import { navigateBack } from 'actionCreators/routing';

import TradeDetails from './TradeDetails';
import selector from './selector';

const mapDispatchToProps = {
  requestCurrencyDetails,
  navigateBack,
};

export default connect(selector, mapDispatchToProps)(TradeDetails)
