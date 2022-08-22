import { useState } from 'react';
import './App.css';
import './Components.css';
import AddStepButton from './components/AddStepButton';
import FlowTree from './components/FlowTree';
import StepBlock from './components/StepBlock';
import flowData from './sample/flow.json';

function App() {
  const [flow, setFlow] = useState(flowData);
  return (
    <div className='App'>
      <FlowTree title={flow.title}>
        {flow.steps.map((step, i, arr) => {
          return (
            <div key={step.id}>
              <StepBlock title={step.title} desc={step.desc} />
              {arr.length > i + 1 ? (
                <AddStepButton hideByDefault={true} />
              ) : (
                <></>
              )}
            </div>
          );
        })}
        <div style={{ height: '30px' }}></div>
        <AddStepButton setFlow={setFlow} />
      </FlowTree>
    </div>
  );
}

export default App;
