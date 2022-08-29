import React from 'react';
import AddStepButton from './AddStepButton';
import If from './If';
import Loop from './Loop';
import StepBlock from './StepBlock';
import VSpacer from './VSpacer';

const getLastAddButton = (onNewStep, path) => {
  return (
    !path && (
      <>
        <VSpacer space={20} />
        <AddStepButton path='' onNewStep={onNewStep} />
      </>
    )
  );
};

const RenderBlocks = ({ steps, path, onNewStep, showMiddleAddButton }) => {
  path = path || '';
  const loadBlockSwitch = React.useCallback(
    (step, currentPosition, currentPath) => {
      switch (step.as) {
        case 'ifelse':
          return (
            <>
              <StepBlock title={step.title} desc={step.desc} />
              <If>
                <If.If>
                  <RenderBlocks
                    steps={step.if}
                    path={`${currentPath}.if`}
                    onNewStep={onNewStep}
                  />
                  <VSpacer space={20} />
                  <AddStepButton
                    title='Add If Step here'
                    path={`${currentPath}.if`}
                    onNewStep={onNewStep}
                  />
                </If.If>
                <If.Else>
                  <RenderBlocks
                    steps={step.else}
                    path={`${currentPath}.else`}
                    onNewStep={onNewStep}
                  />
                  <VSpacer space={20} />
                  <AddStepButton
                    title='Add Else Step here'
                    path={`${currentPath}.else`}
                    onNewStep={onNewStep}
                  />
                </If.Else>
              </If>
              <div className='ft-step-block-foot'>
                {steps.length > currentPosition + 1 ? (
                  <AddStepButton
                    hideByDefault={!showMiddleAddButton}
                    position={currentPosition}
                    path={path}
                    onNewStep={onNewStep}
                  />
                ) : (
                  <></>
                )}
              </div>
            </>
          );
        case 'loop':
          return (
            <>
              <StepBlock title={step.title} desc={step.desc} />
              <Loop>
                <RenderBlocks
                  steps={step.steps}
                  path={`${currentPath}.steps`}
                  onNewStep={onNewStep}
                />
                <VSpacer space={20} />
                <AddStepButton
                  title='Add Step here'
                  path={`${currentPath}.steps`}
                  onNewStep={onNewStep}
                />
              </Loop>
            </>
          );
        default:
          return (
            <>
              <StepBlock title={step.title} desc={step.desc} />
              {steps.length > currentPosition + 1 ? (
                <AddStepButton
                  hideByDefault={!showMiddleAddButton}
                  position={currentPosition}
                  path={path}
                  onNewStep={onNewStep}
                  className='ft-step-block-foot'
                />
              ) : (
                <></>
              )}
            </>
          );
      }
    }
  );

  return (
    <>
      {steps.map((step, index) => {
        const currPath = `${path}[${index}]`;
        return (
          <div key={index}>{loadBlockSwitch(step, index, currPath, path)}</div>
        );
      })}
      {getLastAddButton(onNewStep, path)}
    </>
  );
};

export default RenderBlocks;
