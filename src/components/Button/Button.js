import React from 'react';
import PropTypes from 'prop-types';

import MaterialuiButton from '@material-ui/core/Button';

export default function Button({ children, onClick, active, ...props }) {
  return (
    <MaterialuiButton
      {...props}
      variant="outlined"
      color={active ? 'secondary' : 'primary'}
      onClick={onClick}
    >
      {children}
    </MaterialuiButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  active: false
};

