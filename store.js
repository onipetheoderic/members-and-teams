import React, { createContext, useReducer } from "react";

const initialState = {
  members: [],
};

export const OverallContext = createContext(initialState);

export const OverallContextProvider = props => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_MEMBERS":
        return { ...state, members: action.payload };

      default:
        throw new Error();
    }
  }, initialState);
  return (
    <OverallContext.Provider value={{ state, dispatch }}>
      {props.children}
    </OverallContext.Provider>
  );
};
