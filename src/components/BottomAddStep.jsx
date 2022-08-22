import React from 'react';
import AddStepButton from './AddStepButton';
import StepSideLine from './StepSideLine';
const BottomAddStep = () => {
  return (
    <div style={{ paddingLeft: '4px' }}>
      <div
        style={{
          position: 'relative'
        }}>
        <StepSideLine style={{ marginLeft: '7%', height: '34px' }} />
      </div>
      <AddStepButton />
    </div>
  );
};

export default BottomAddStep;
