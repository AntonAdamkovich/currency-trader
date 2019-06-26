import React from 'react';
import MaterialUiTable from '@material-ui/core/Table';
import MaterialUiTableBody from '@material-ui/core/TableBody';

export default function Table({ children }) {
  return (
    <MaterialUiTable>
      <MaterialUiTableBody>
        {children}
      </MaterialUiTableBody>
    </MaterialUiTable>
  )
}
