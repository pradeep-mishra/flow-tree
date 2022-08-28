import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';

const StepTitle = ({ title, desc }) => {
  return (
    <>
      <div>
        <h5 style={{ margin: '0px', fontWeight: '500' }}>
          {title ?? 'Title Here'}
        </h5>
        <span style={{ fontSize: '0.7em', color: 'rgb(122,122,122)' }}>
          {desc ?? 'description here'}
        </span>
      </div>
      <div>
        <MdOutlineDelete className='ft-step-config-icon' />
      </div>
    </>
  );
};

export default StepTitle;
