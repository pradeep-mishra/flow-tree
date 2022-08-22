import React from 'react';

const AddStepButton = ({ hideByDefault, setFlow }) => {
  const addNewStep = () => {
    if (!setFlow) {
      return;
    }
    setFlow((flow) => {
      return {
        ...flow,
        steps: [
          ...flow.steps,
          { title: 'New Step', desc: 'New Desc', id: flow.steps.length }
        ]
      };
    });
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
