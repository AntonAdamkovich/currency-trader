import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Table from 'components/Table';
import TableRow from 'components/TableRow';
import Paper from '@material-ui/core/Paper';

export default function CurrenciesList({ currenciesList, navigateToDetails }) {
  return (
    <Container>
      <Table>
        {currenciesList.map(currency => (
          <TableRow
            key={currency.base}
            currency={currency.base}
            onCurrencyClick={() => navigateToDetails(currency)}
          />
        ))}
      </Table>
    </Container>
  );
}

CurrenciesList.propTypes = {
  navigateToDetails: PropTypes.func.isRequired,
  currenciesList: PropTypes.arrayOf(PropTypes.string).isRequired
};


const Container = styled(Paper)`
  max-width: 320px;
  display: flex;
  margin: auto;
`;
