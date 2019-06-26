import React from 'react';
import PropTypes from 'prop-types';

import MaterialUiTableCell from '@material-ui/core/TableCell';
import MaterialUiTableRow from '@material-ui/core/TableRow';

import Button from 'components/Button';

export default function TableRow({ currency, onCurrencyClick }) {
  return (
    <MaterialUiTableRow>
      <MaterialUiTableCell align="left">{currency}</MaterialUiTableCell>
      <MaterialUiTableCell align="right">
        <Button onClick={onCurrencyClick}>
          TRADE
        </Button>
      </MaterialUiTableCell>
    </MaterialUiTableRow>
  )
}

TableRow.propTypes = {
  currency: PropTypes.string.isRequired,
  onCurrencyClick: PropTypes.func,
};

TableRow.defaultProps = {
  onCurrencyClick: () => {},
};
