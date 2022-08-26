import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

const AddStepButton = ({ hideByDefault, position, setSteps, title }) => {
  const addNewStep = () => {
    setSteps(position);
  };
  return (
    <div
      onClick={addNewStep}
      className={`add-step-mid ${hideByDefault ? 'ft-step-hide' : ''}`}>
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
