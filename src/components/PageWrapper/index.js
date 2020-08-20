import './styles.scss';
import React from 'react';

const PageWrapper = ({modifierCLasses, children}) => {
  return (
    <div className={`page-wrapper ${modifierCLasses ? modifierCLasses : ''}`}>
      {children}
    </div>
  );
}

export default PageWrapper;