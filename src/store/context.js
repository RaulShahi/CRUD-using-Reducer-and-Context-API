import React, { useReducer } from "react";
import {
  reducerFunction,
  initialCrudState,
} from "../components/Reducers/Reducer";
import {
  validityReducer,
  initialValidity,
} from "../components/Reducers/ValidityReducer";
import {
  initialFormState,
  formReducer,
} from "../components/Reducers/FormStateReducer";

export const crudContext = React.createContext();

export const MyContext = ({ children }) => {
  const [crudData, dispatchCrudData] = useReducer(
    reducerFunction,
    initialCrudState
  );
  const [validity, validityDispatcher] = useReducer(
    validityReducer,
    initialValidity
  );
  const [formData, formDispatcher] = useReducer(formReducer, initialFormState);

  return (
    <crudContext.Provider
      value={{
        crudData,
        dispatchCrudData,
        validity,
        validityDispatcher,
        formData,
        formDispatcher,
      }}
    >
      {children}
    </crudContext.Provider>
  );
};
