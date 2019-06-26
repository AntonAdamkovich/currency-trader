import React from 'react';
import styled from 'styled-components';

import Fab from '@material-ui/core/Fab';

function BackButton({ ...props }) {
  return (
    <Fab variant="extended" aria-label="Delete" {...props}>
      Back
    </Fab>
  )
}

export default styled(BackButton)`
  max-width: 100px;
`;
