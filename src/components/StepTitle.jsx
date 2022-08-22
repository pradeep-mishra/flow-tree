import React from 'react';

const StepTitle = ({ title, desc }) => {
  return (
    <div>
      <h5 style={{ margin: '0px' }}>{title ?? 'Step Title'}</h5>
      <span style={{ fontSize: '0.8em', color: 'rgb(122,122,122)' }}>
        {desc ?? 'step description here'}
      </span>
    </div>
  );
};

export default StepTitle;
