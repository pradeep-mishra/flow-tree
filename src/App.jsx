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

  function addStep(position) {
    const newItem = {
      name: 's' + Math.random() * Date.now(),
      id: 's' + Math.random() * Date.now(),
      title: 'Here is New Step Added',
      desc: 'description put here'
    };
    if (isNaN(position)) {
      return setSteps([...steps, newItem]);
    }
    let newSteps = [...steps];
    newSteps.splice(position + 1, 0, newItem);
    setSteps(newSteps);
  }

  return (
    <div className='App'>
      <FlowTree title={title}>
        <FlowBlock>
          <RenderBlocks steps={steps} setSteps={addStep} />
          <VSpacer space={30} />
          <AddStepButton setSteps={addStep} />
        </FlowBlock>
      </FlowTree>
    </div>
  );
}

export default App;
