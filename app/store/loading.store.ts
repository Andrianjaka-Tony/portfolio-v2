import { create } from "zustand";

type LoadingStoreState = { isLoading: boolean };
type LoadingStoreActions = { setLoading: (value: boolean) => void };
type LoadingStore = LoadingStoreState & LoadingStoreActions;

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: true,
  setLoading: (value: boolean) => set(() => ({ isLoading: value })),
}));
