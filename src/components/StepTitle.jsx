import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';

const StepTitle = ({ title, desc }) => {
  return (
    <>
      <div>
        <h5 style={{ margin: '0px' }}>{title ?? 'Title Here'}</h5>
        <span style={{ fontSize: '0.8em', color: 'rgb(122,122,122)' }}>
          {desc ?? 'description here'}
        </span>
      </div>
      <div style={{ position: 'absolute', right: '8px' }}>
        <MdOutlineDelete className='ft-step-config-icon' />
      </div>
    </>
  );
};

export default StepTitle;
