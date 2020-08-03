import React from 'react';

const SplitLayout = ({type, placeholder}) => {
  return (
    <input 
      className={`input${type === 'submit' ? ' input--submit' : ''}`} type={type} placeholder={placeholder}/>
  );
}

export default SplitLayout;