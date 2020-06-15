import './styles.scss';
import React from 'react';

const SplitLayout = ({children}) => {
  return (
    <div className="split-layout">
      {children}
    </div>
  );
}

export default SplitLayout;