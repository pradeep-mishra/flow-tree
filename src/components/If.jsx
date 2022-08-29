import React from 'react';
import FlowBlock from './FlowBlock';

const IfBlock = ({ children }) => {
  return null;
};

const ElseBlock = ({ children }) => {
  return null;
};

const If = ({ children, className }) => {
  const ifBlock = children.find((el) => el.type === IfBlock);
  const elseBlock = children.find((el) => el.type === ElseBlock);
  return (
    <div className={`ft-step-block-body ${className ?? ''}`}>
      <div className='ft-spear-hline'></div>
      <FlowBlock className='ft-spear-head-bg-line-green'>
        <div style={{ paddingLeft: '50px' }}>
          <FlowBlock className='ft-spear-head-bg-line-red'>
            <div className='ft-else-block'>
              {elseBlock ? elseBlock.props.children : null}
            </div>
          </FlowBlock>
        </div>
        <div className='ft-if-block'>
          {ifBlock ? ifBlock.props.children : null}
        </div>
      </FlowBlock>
    </div>
  );
};

If.If = IfBlock;
If.Else = ElseBlock;

export default If;
