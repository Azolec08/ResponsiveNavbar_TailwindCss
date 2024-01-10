import { create } from "zustand";

type stateType = {
  //state
  population: number;
  mySwitch: boolean;
  nameVal: string;

  //function
  increment: () => void;
  switchName: () => void;
  nameValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const userStore = create<stateType>((set) => ({
  //State
  population: 0,
  mySwitch: false,
  nameVal: "",
  //Functions
  increment: () => set((state) => ({ population: state.population + 1 })),
  switchName: () => set((state) => ({ mySwitch: !state.mySwitch })),
  nameValue: (e: React.ChangeEvent<HTMLInputElement>) =>
    set(() => ({ nameVal: e.target.value })),
}));
