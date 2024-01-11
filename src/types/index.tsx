export type stateType = {
  name: string;
  pay: number;
  switch: boolean;
  nameVal: string;
  open: boolean;
};

export type actionType =
  | { type: "changeName" }
  | { type: "increment"; payload: number }
  | { type: "changeBoolean"; payload: boolean }
  | { type: "nameValue"; payload: string }
  | { type: "openNav" }
  | { type: "openFalse" };

export type sideTypes = {
  title: string;
  path: string;
};
