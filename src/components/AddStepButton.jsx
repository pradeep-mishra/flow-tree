import React from 'react';

const AddStepButton = ({ hideByDefault, position, setFlow }) => {
  const addNewStep = () => {
    if (!setFlow) {
      return;
    }
    setFlow((flow) => {
      let newSteps = [...flow.steps];
      let item = {
        title: 'Configure Step',
        desc: '',
        id: flow.steps.length
      };

      if (position === 'last') {
        newSteps.push(item);
      } else {
        newSteps.splice(position + 1, 0, item);
      }
      return {
        ...flow,
        steps: newSteps
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
