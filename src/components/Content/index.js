import './styles.scss';
import React from 'react';

const Content = ({title, children}) => {
  
  function getTitle(el) {
    return <h1>{title}</h1>;
  }

  return (
    <div className="content">
      {getTitle(title)}
      {children}
    </div>
  );
}

export default Content;