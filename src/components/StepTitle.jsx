import React from 'react';

const StepTitle = ({ title, desc }) => {
  return (
    <div>
      <h5 style={{ margin: '0px', fontWeight: '500' }}>
        {title ?? 'Title Here'}
      </h5>
      <span
        style={{
          fontSize: '0.7em',
          color: 'rgb(122,122,122)',
          maxWidth: '24em',
          display: 'block',
          lineHeight: '1.2em'
        }}>
        {desc ?? 'description here'}
      </span>
    </div>
  );
};

export default StepTitle;
