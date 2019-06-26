import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import styled from 'styled-components';

import * as Routes from 'constants/routing';

import CurrenciesList from 'pages/CurrenciesList';
import TradeDetails from 'pages/TradeDetails';
import NotFound from 'pages/NotFound';

export default function App() {
  return (
    <Container>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Route path={Routes.TRADE_DETAILS_PARAMS} component={TradeDetails}/>
        <Route path={Routes.CURRENCIES_LIST} component={CurrenciesList}/>
        <Route path={Routes.OTHER} component={NotFound} />
      </AnimatedSwitch>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width:100%;
`;
