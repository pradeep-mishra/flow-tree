import React from 'react';

const AddStepButton = ({ hideByDefault, position, setFlow }) => {
  const addNewStep = () => {
    setFlow(position);
  };
  return (
    <div
      onClick={addNewStep}
      className={`add-step-mid ${hideByDefault ? 'ft-step-hide' : ''}`}>
      <div className='add-step-wrapper'>
        <div>
          <div className='add-step-btn'>
            <div className='add-step-btn-ctn'></div>
          </div>
        </div>
        <div className='add-step-btn-text'>Add Step</div>
      </div>
    </div>
  );
};

export default AddStepButton;
