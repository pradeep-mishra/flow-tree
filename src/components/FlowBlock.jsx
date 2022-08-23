import React from 'react';

const FlowBlock = ({ children, spear, className = '' }) => {
  return (
    <div
      className={`ft-block ${spear ? 'spear-head-bg-line' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default FlowBlock;
