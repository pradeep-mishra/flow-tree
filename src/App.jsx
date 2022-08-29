import { get } from 'lodash';
import React from 'react';
import './Components.css';
import FlowBlock from './components/FlowBlock';
import FlowTree from './components/FlowTree';
import RenderBlocks from './components/RenderBlocks';
import flow from './sample/flow1.json';
import { useFlowStore } from './store/flow';

function App() {
  const setSteps = useFlowStore((state) => state.setSteps);
  const setTitle = useFlowStore((state) => state.setTitle);
  const title = useFlowStore((state) => state.title);
  const steps = useFlowStore((state) => state.steps);

  const addNewStep = (path, position) => {
    const newItem = {
      id: 's' + Math.random() * Date.now(),
      title: 'Configure Step',
      desc: ''
    };
    let newSteps = [...steps];
    let frag = path ? get(steps, path) : newSteps;
    if (!frag) {
      return console.log('store fragment not found on', path, position);
    }
    if (!isNaN(position)) {
      frag.splice(position + 1, 0, newItem);
      return setSteps(newSteps);
    }
    frag.push(newItem);
    setSteps(newSteps);
  };

  const deleteStep = (path, position) => {
    let newPath = path.replace(/\[\d+\]$/gm, '').trim();
    let newSteps = [...steps];
    let frag = newPath ? get(steps, newPath) : newSteps;
    if (!frag) {
      return console.log('store fragment not found on', path, position);
    }
    if (!isNaN(position)) {
      frag.splice(position, 1);
      return setSteps(newSteps);
    }
  };

  React.useEffect(() => {
    setTitle(flow.title);
    setSteps(flow.steps);
  }, []);

  return (
    <FlowTree title={title}>
      <FlowBlock>
        <RenderBlocks
          steps={steps}
          onNewStep={addNewStep}
          onDeleteStep={deleteStep}
        />
      </FlowBlock>
    </FlowTree>
  );
}

export default App;
