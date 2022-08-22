import React from 'react';
import { MdOutlineBubbleChart } from 'react-icons/md';

const StepIcon = (backgroundColor = '#DEEBFF', icon) => {
  return (
    <div className='ft-step-icon'>
      <MdOutlineBubbleChart size='1.5em' />
    </div>
  );
};

export default StepIcon;
