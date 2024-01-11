import {
  createContext,
  useContext,
  useReducer,
  Reducer,
  ReactNode,
  Dispatch,
} from "react";

import { actionType, stateType } from "../types";

type globalTypes = {
  state: stateType;
  dispatch: Dispatch<actionType>;
};

const GlobalContext = createContext({} as globalTypes);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Use useGlobalContext instead");
  }

  return context;
};

type childrenType = {
  children: ReactNode;
};

const reducer: Reducer<stateType, actionType> = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: "gemma" };
    case "increment":
      return { ...state, pay: action.payload };
    case "changeBoolean":
      return { ...state, switch: action.payload };
    case "nameValue":
      return { ...state, nameVal: action.payload };
    case "openNav":
      return { ...state, open: !state.open };
    case "openFalse":
      return { ...state, open: false };
    default:
      return state;
  }
};

export const CreateGlobalContext = ({ children }: childrenType) => {
  const initialize = {
    name: "mark",
    pay: 0,
    switch: false,
    nameVal: "",
    open: false,
  };

  const [state, dispatch] = useReducer(reducer, initialize);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
