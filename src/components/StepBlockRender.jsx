import React from 'react';
import AddStepButton from './AddStepButton';
import StepBlock from './StepBlock';
AddStepButton;
const StepBlockRender = ({ flow, hideAddButton, setFlow }) => {
  return (
    <>
      {flow.steps.map((step, i, arr) => {
        return (
          <div key={step.id}>
            <StepBlock title={step.title} desc={step.desc} />
            {arr.length > i + 1 ? (
              <AddStepButton
                hideByDefault={hideAddButton ?? false}
                position={i}
                setFlow={setFlow}
              />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
};

export default StepBlockRender;
