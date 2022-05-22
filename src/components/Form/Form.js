import React, { useCallback, useContext, useState } from "react";
import FormComponent from "./FormComponent";
import UsersList from "../Users/UsersList";
import Search from "../Users/Search";
import { crudContext } from "../../store/context";
import Card from "../UI/Card/Card";
import classes from "../Users/UsersList.module.css";
import { FormContext } from "../../store/FormContext";

const Form = (props) => {
  const { crudData, formDispatcher, validityDispatcher, formData } =
    useContext(crudContext);
  const { setEdit } = useContext(FormContext);
  const [searchedName, setSearchedName] = useState("");
  const [role, setRole] = useState("");
   const[text, setText]= useState('');

  const editHandler = useCallback(
    (iD) => {
      setEdit(true);
      const updateUser = crudData.currentUsers.find((item) => item.id === iD);
      console.log("updateUser", updateUser);
      formDispatcher({ type: "UPDATE", payload: updateUser });
      console.log("In edit", formData);
      validityDispatcher({ type: "ALL_TRUE" });
    },
    [crudData]
  );
  const deleteHandler = useCallback((event) => {
    setEdit(false);
  });

  const searchHandler = useCallback(
    (name) => {
      console.log("Name", name);
      setSearchedName(name);
    },
    [searchedName]
  );

  const selectRoleHandler = useCallback(
    (role) => {
      setRole(role);
    },
    [role]
  );

  return (
    <div className="allThree">
      <FormComponent />
      <Card className={classes.words}>
        <h2>Users List</h2>
        <Search onSearch={searchHandler}  onSelectRole={selectRoleHandler} />
        <UsersList
          onEdit={editHandler}
          onDelete={deleteHandler}
          name={searchedName}
          role={role}
        />
      </Card>
    </div>
  );
};

export default Form;
