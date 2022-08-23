import React from 'react';
import AddStepButton from './AddStepButton';
import IfBlock from './IfBlock';
import StepBlock from './StepBlock';
import VSpacer from './VSpacer';

const StepBlockRender = ({ showAddButton, steps, setSteps, pos }) => {
  const nextSetSteps = (position) => {
    return function () {};
  };
  //const setSteps = useFlowStore((state) => state.setSteps);
  //const steps = useFlowStore((state) => state.steps);

  return (
    <>
      {steps.map((step, i, arr) => {
        return (
          <div key={step.id}>
            {step.behaviour === 'ifelse' ? (
              <>
                <StepBlock title={step.title} desc={step.desc} />
                <IfBlock>
                  <StepBlockRender
                    hideAddButton={true}
                    steps={step.if}
                    setSteps={nextSetSteps(i)}
                    pos={i}
                  />
                  <VSpacer space={30} />
                  <AddStepButton
                    title='Add If Step'
                    position={i}
                    setSteps={nextSetSteps(i)}
                  />
                </IfBlock>
                {arr.length > i + 1 ? (
                  <AddStepButton
                    hideByDefault={!showAddButton}
                    position={i}
                    setSteps={setSteps}
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
                    hideByDefault={!showAddButton}
                    position={i}
                    setSteps={setSteps}
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
