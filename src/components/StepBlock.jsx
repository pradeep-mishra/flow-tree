import React from 'react';
import StepIcon from './StepIcon';
import StepTitle from './StepTitle';

const StepBlock = ({ title, desc, icon, noLine }) => {
  return (
    <div className='ft-step-block-head'>
      <div style={{ position: 'relative' }}>
        <StepIcon icon={icon} />
      </div>
      <StepTitle title={title} desc={desc} />
    </div>
  );
};

export default StepBlock;
