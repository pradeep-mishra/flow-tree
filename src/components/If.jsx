import React from 'react';
import FlowBlock from './FlowBlock';

const hLineStyle = {
  width: '102px',
  position: 'absolute',
  top: '0px',
  left: '16px',
  borderTop: '2px solid rgb(235, 236, 240)'
};

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
    <div className={className}>
      <div style={hLineStyle}></div>
      <FlowBlock className='spear-head-bg-line-green'>
        <div style={{ paddingLeft: '50px' }}>
          <FlowBlock className='spear-head-bg-line-red'>
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
