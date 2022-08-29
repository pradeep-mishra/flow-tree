import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import StepIcon from './StepIcon';
import StepTitle from './StepTitle';

const StepBlock = ({
  title,
  desc,
  icon,
  currPosition,
  currPath,
  onDeleteStep
}) => {
  const onDelete = () => {
    onDeleteStep(currPath, currPosition);
  };
  return (
    <div className='ft-step-block-head'>
      <div style={{ position: 'relative' }}>
        <StepIcon icon={icon} />
      </div>
      <StepTitle title={title} desc={desc} />
      <div>
        <MdOutlineDelete onClick={onDelete} className='ft-step-config-icon' />
      </div>
    </div>
  );
};

export default StepBlock;
