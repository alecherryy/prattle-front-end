import './styles.scss';
import React from 'react';

const ColumnLayout = ({children}) => {
  return (
    <div className="column-layout">
      {children}
    </div>
  );
}

export default ColumnLayout;