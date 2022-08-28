import { get } from 'lodash';
import './App.css';
import './Components.css';
import AddStepButton from './components/AddStepButton';
import FlowBlock from './components/FlowBlock';
import FlowTree from './components/FlowTree';
import RenderBlocks from './components/RenderBlocks';
import VSpacer from './components/VSpacer';
import { useFlowStore } from './store/flow';

function App() {
  const setSteps = useFlowStore((state) => state.setSteps);
  const title = useFlowStore((state) => state.title);
  const steps = useFlowStore((state) => state.steps);

  function addNewStep(path, position) {
    const newItem = {
      name: 's' + Math.random() * Date.now(),
      id: 's' + Math.random() * Date.now(),
      title: 'Configure Step',
      desc: 'description here'
    };
    let newSteps = [...steps];
    let frag = path ? get(steps, path) : newSteps;
    if (!frag) {
      return console.log('store fragment not found to', path, position);
    }
    if (!isNaN(position)) {
      frag.splice(position + 1, 0, newItem);
      return setSteps(newSteps);
    }
    frag.push(newItem);
    setSteps(newSteps);
  }

  return (
    <div className='App'>
      <FlowTree title={title}>
        <FlowBlock>
          <RenderBlocks steps={steps} onNewStep={addNewStep} />
          <VSpacer space={30} />
          <AddStepButton path='' onNewStep={addNewStep} />
        </FlowBlock>
      </FlowTree>
    </div>
  );
}

export default App;
