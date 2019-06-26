import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Header from 'components/Header';
import Button from 'components/Button';
import BackButton from 'components/BackButton';

import Paper from '@material-ui/core/Paper';

export default class TradeDetails extends PureComponent {

  static propTypes = {
    chooseCurrencyName: PropTypes.string.isRequired,
    pairedCurrencies: PropTypes.arrayOf(PropTypes.object).isRequired,
    navigateBack: PropTypes.func,
  };

  static defaultProps = {
    navigateBack: () => {},
  };

  state = {
    isSubmitted: false,
    isPairChoose: false,
    activeCurrency: {},
  };

  handleSubmitClick = () => this.setState({ isSubmitted: true});

  handleOptionClick = (activeCurrency) => this.setState({ activeCurrency, isPairChoose: true });

  render() {
    const { activeCurrency, isSubmitted, isPairChoose } = this.state;
    const { chooseCurrencyName, pairedCurrencies, navigateBack } = this.props;

    return (
      <Container>
        <BackButton onClick={() => navigateBack()}/>
        <Header title={chooseCurrencyName} />
        <ButtonsContainer>
          <ButtonsWrapper>
            {
              pairedCurrencies.map(currency => (
                <Button
                  active={currency.altname === activeCurrency.altname}
                  disabled={currency.altname === chooseCurrencyName}
                  onClick={() => this.handleOptionClick(currency)}
                >
                  {`SELL FOR ${currency.quote}`}
                </Button>
              ))
            }
          </ButtonsWrapper>
          {
            isPairChoose && (
              <InputWrapper>
                <TextField
                  label="amount"
                  margin="normal"
                  variant="outlined"
                  type="number"
                />
                <Button onClick={this.handleSubmitClick}>TRADE NOW</Button>
                <SubmitButtonWrapper>
                  {
                    isSubmitted && (
                      <CongratulationText variant="h6">
                        {`Trade between ${chooseCurrencyName} and ${activeCurrency.altname} successful`}
                      </CongratulationText>
                    )
                  }
                </SubmitButtonWrapper>
              </InputWrapper>
            )
          }
        </ButtonsContainer>
      </Container>
    );
  }
}

TradeDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const Container = styled.div`
  max-width: 500px;
  min-width: 520px;
  margin: auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled(Paper)`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 450px;
`;

const CongratulationText = styled(Typography)`
  color: ${props => props.theme.colors.SECONDARY_BACKGROUND_COLOR};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubmitButtonWrapper = styled.div`
  min-height: 32px;
`;
