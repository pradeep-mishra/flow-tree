import React from 'react';
import AddStepButton from './AddStepButton';
import If from './If';
import StepBlock from './StepBlock';
import VSpacer from './VSpacer';

const RenderBlocks = ({ steps, setSteps, currentPosition, showAddButton }) => {
  const loadBlockSwitch = (step, currentPosition) => {
    switch (step.as) {
      case 'ifelse':
        return (
          <>
            <StepBlock title={step.title} desc={step.desc} />
            <If>
              <If.If>
                <RenderBlocks
                  hideAddButton={true}
                  steps={step.if}
                  position={currentPosition}
                  setSteps={setSteps}
                />
                <VSpacer space={30} />
                <AddStepButton
                  title='Add If Step here'
                  position={currentPosition}
                  setSteps={setSteps}
                />
              </If.If>
              <If.Else>
                <RenderBlocks
                  hideAddButton={true}
                  steps={step.else}
                  position={currentPosition}
                  setSteps={setSteps}
                />
                <VSpacer space={30} />
                <AddStepButton
                  title='Add Else Step here'
                  position={currentPosition}
                  setSteps={setSteps}
                />
              </If.Else>
            </If>
          </>
        );
      default:
        return (
          <>
            <StepBlock title={step.title} desc={step.desc} />
            {steps.length > currentPosition + 1 ? (
              <AddStepButton
                hideByDefault={!showAddButton}
                position={currentPosition}
                setSteps={setSteps}
              />
            ) : (
              <></>
            )}
          </>
        );
    }
  };

  return (
    <>
      {steps.map((step, index) => {
        return <div key={step.id}>{loadBlockSwitch(step, index)}</div>;
      })}
    </>
  );
};

export default RenderBlocks;
