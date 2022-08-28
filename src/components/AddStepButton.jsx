import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

const AddStepButton = ({
  hideByDefault,
  title,
  path,
  position,
  onNewStep,
  className
}) => {
  const addNewStep = () => onNewStep(path, position);
  return (
    <div
      onClick={addNewStep}
      className={`add-step-mid ${hideByDefault ? 'ft-step-hide' : ''} ${
        className ?? ''
      }`}>
      <div className='add-step-wrapper'>
        <div>
          <div className='add-step-btn'>
            <MdAddCircleOutline />
          </div>
        </div>
        <div className='add-step-btn-text'>{title ?? 'Add Step'}</div>
      </div>
    </div>
  );
};

export default AddStepButton;
