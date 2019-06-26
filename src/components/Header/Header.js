import React from 'react';
import PropTpypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function Header({ title, ...props }) {
  return (
    <AppBar position="static" {...props} >
      <Typography variant="h6">
        {title}
      </Typography>
    </AppBar>
  )
}

Header.propTypes = {
  title: PropTpypes.string.isRequired,
};

export default styled(Header)`
  text-align: center;
  margin: 15px 0;
`;
