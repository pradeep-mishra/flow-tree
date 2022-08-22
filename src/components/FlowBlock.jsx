import React from 'react';

const FlowBlock = ({ children, spear }) => {
  return (
    <div className={`ft-block ${spear ? 'spear-head-bg-line' : ''}`}>
      {children}
    </div>
  );
};

export default FlowBlock;
