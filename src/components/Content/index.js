import './styles.scss';
import React from 'react';

const Content = ({title, subtitle, children}) => {
  function Subtitle(props) {
    const subtitle = props.subtitle;
    if (subtitle) {
      return <h2>{subtitle}</h2>;
    }
    else {
      return null;
    }
  }

  return (
    <div className="content">
      <h1>{title}</h1>
      <Subtitle subtitle={subtitle} />
      {children}
    </div>
  );
}

export default Content;