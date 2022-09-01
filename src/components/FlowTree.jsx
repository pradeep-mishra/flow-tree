import React from 'react';

const FlowTree = ({ title, setTitle, children }) => {
  let inputRef = React.useRef(null);
  const toggleInput = (status) => {
    if (status === true) {
      inputRef.current.classList.remove('ft-opacity-0');
      inputRef.current.focus();
    } else {
      inputRef.current.classList.add('ft-opacity-0');
    }
  };
  return (
    <div style={{ position: 'relative' }}>
      <h3 className='ft-title-h3'>{title || 'New Flow'}</h3>
      <input
        type='text'
        name='title'
        className='ft-opacity-0 ft-title-input'
        ref={inputRef}
        value={title}
        onChange={(e) => {
          console.log(e.key);
          setTitle(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key == 'Enter') {
            inputRef.current.blur();
          }
        }}
        onClick={() => toggleInput(true)}
        onBlur={() => toggleInput(false)}
      />

      {children}
    </div>
  );
};

export default FlowTree;
