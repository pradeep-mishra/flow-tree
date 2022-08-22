import React from 'react';
import FlowBlock from './FlowBlock';

const IfBlock = ({ children }) => {
  return (
    <div>
      <FlowBlock>{children}</FlowBlock>
    </div>
  );
};

export default IfBlock;
