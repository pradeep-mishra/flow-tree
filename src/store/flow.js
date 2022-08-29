import create from 'zustand';
//import flow from '../sample/flow1.json';
const useFlowStore = create((set) => ({
  title: 'My Flow',
  desc: '',
  steps: [],
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
