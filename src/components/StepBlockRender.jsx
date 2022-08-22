import React, { useState } from 'react';
import AddStepButton from './AddStepButton';
import IfBlock from './IfBlock';
import StepBlock from './StepBlock';
AddStepButton;
const StepBlockRender = ({ flow, hideAddButton }) => {
  const [steps, setSteps] = useState(flow.steps);
  const setFlow = (position) => {
    setSteps((steps) => {
      let newSteps = [...steps];
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
      return newSteps;
    });
  };

  return (
    <>
      {steps.map((step, i, arr) => {
        return (
          <div key={step.id}>
            {step.name === 's3' ? (
              <>
                <StepBlock title={step.title} desc={step.desc} />

                <IfBlock>
                  <StepBlockRender
                    flow={step}
                    hideAddButton={true}
                    setFlow={setFlow}
                  />
                </IfBlock>
                {arr.length > i + 1 ? (
                  <AddStepButton
                    hideByDefault={hideAddButton ?? false}
                    position={i}
                    setFlow={setFlow}
                  />
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default StepBlockRender;
