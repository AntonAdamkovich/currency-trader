import { connect } from 'react-redux';

import { navigateToDetails } from 'actionCreators/routing';

import CurrenciesList from './CurrenciesList';
import selector from './selector';

const mapDispatchToProps = {
  navigateToDetails,
};

export default connect(selector, mapDispatchToProps)(CurrenciesList);
