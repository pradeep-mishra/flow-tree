import React from 'react';
import FlowBlock from './FlowBlock';

const IfBlock = ({ children }) => {
  return (
    <div style={{ paddingLeft: '50px' }}>
      <FlowBlock spear={true}>
        <div style={{ paddingLeft: '50px' }}>
          <FlowBlock spear={true}>{children}</FlowBlock>
        </div>
      </FlowBlock>
    </div>
  );
};

export default IfBlock;
