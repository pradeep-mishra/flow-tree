import create from 'zustand';
//import {immer} from 'zustand/middleware/immer'
import flow from '../sample/flow1.json';
const useFlowStore = create((set) => ({
  title: flow.title,
  desc: flow.desc,
  steps: flow.steps,
  setTitle: (title) => {
    set((state) => ({ title: title }));
  },
  setDesc: (desc) => {
    set((state) => ({ desc: desc }));
  },
  setSteps: (steps) => {
    set((state) => ({ steps: steps }));
  }
}));

export { useFlowStore };
