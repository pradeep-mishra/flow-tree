import { useState } from 'react';
import './App.css';
import './Components.css';
import AddStepButton from './components/AddStepButton';
import FlowBlock from './components/FlowBlock';
import FlowTree from './components/FlowTree';
import StepBlockRender from './components/StepBlockRender';
import VSpacer from './components/VSpacer';
import flowData from './sample/flow.json';

function App() {
  const [flow, setFlow] = useState(flowData);
  return (
    <div className='App'>
      <FlowTree title={flow.title}>
        <FlowBlock>
          <StepBlockRender flow={flow} hideAddButton={true} setFlow={setFlow} />
          <VSpacer space={30} />
          <AddStepButton setFlow={setFlow} position={'last'} />
        </FlowBlock>
      </FlowTree>
    </div>
  );
}

export default App;
