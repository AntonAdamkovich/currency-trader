import * as ActionsTypes from 'actionTypes/currencies';

const initialState = {
  list: [],
  pairs: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionsTypes.FETCH_CURRENCIES_SUCCESS:
      return {
        list: payload.currencies,
        pairs: payload.pairs,
      };

    default: {
      return state;
    }
  }
}
