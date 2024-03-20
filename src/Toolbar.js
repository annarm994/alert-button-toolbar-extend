import React from 'react';
import AlertButton from './AlertButton';

const Toolbar = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>{button.children}</AlertButton>
      ))}
    </div>
  );
};

export default Toolbar;