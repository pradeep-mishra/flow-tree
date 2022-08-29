import React from 'react';
import FlowBlock from './FlowBlock';

const Loop = ({ children, className }) => {
  return (
    <div className={`ft-step-block-body ${className ?? ''}`}>
      <div className='ft-spear-hline-half'></div>
      <FlowBlock className='ft-spear-head-bg-line-gray'>
        <div className='ft-loop-block'>{children}</div>
      </FlowBlock>
    </div>
  );
};

export default Loop;
