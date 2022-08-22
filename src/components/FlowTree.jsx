import React from 'react';

const FlowTree = ({ title, children }) => {
  return (
    <div>
      <h3>{title || 'New Flow'}</h3>
      <div className='ft-block'>{children}</div>
    </div>
  );
};

export default FlowTree;
