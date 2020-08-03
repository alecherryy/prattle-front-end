import './styles.scss';
import React from 'react';

const Content = ({title, children}) => {

  return (
    <div className="content">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Content;