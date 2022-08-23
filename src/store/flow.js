import create from 'zustand';
import flow from '../sample/flow.json';
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
