export type stateType = {
  name: string;
  pay: number;
  switch: boolean;
  nameVal: string;
};

export type actionType =
  | { type: "changeName" }
  | { type: "increment"; payload: number }
  | { type: "changeBoolean"; payload: boolean }
  | { type: "nameValue"; payload: string };
