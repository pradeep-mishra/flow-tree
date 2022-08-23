import React from 'react';
import AddStepButton from './AddStepButton';
import FlowBlock from './FlowBlock';
import VSpacer from './VSpacer';

const hLineStyle = {
  width: '102px',
  position: 'absolute',
  top: '0px',
  left: '16px',
  borderTop: '2px solid #EBECF0'
};
const IfBlock = ({ children }) => {
  return (
    <div style={{ paddingLeft: '50px', position: 'relative' }}>
      <div style={hLineStyle}></div>
      <FlowBlock spear={true}>
        <div style={{ paddingLeft: '50px' }}>
          <FlowBlock spear={true}>{children}</FlowBlock>
        </div>
        <VSpacer space={30} />
        <AddStepButton title='Add Else Step' />
      </FlowBlock>
    </div>
  );
};

export default IfBlock;
