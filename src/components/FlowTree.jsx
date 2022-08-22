import React from 'react';

const FlowTree = ({ title, children }) => {
  return (
    <div>
      <h3>{title || 'New Flow'}</h3>
      {children}
    </div>
  );
};

export default FlowTree;
