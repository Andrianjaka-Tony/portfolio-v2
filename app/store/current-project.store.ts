import { create } from "zustand";

type CurrentProjectStoreState = { index: number };
type CurrentProjectStoreActions = { setIndex: (value: number) => void };
type CurrentProjectStore = CurrentProjectStoreState & CurrentProjectStoreActions;

export const useCurrentProjectStore = create<CurrentProjectStore>((set) => ({
  index: 0,
  setIndex: (value: number) => set(() => ({ index: value })),
}));
