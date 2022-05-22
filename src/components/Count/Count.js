import React, { useContext } from "react";
import { crudContext } from "../../store/context";
import Button from "../UI/Button/Button";

const Count = () => {
  const { crudData } = useContext(crudContext);
  const count = crudData.currentUsers.length;
  return <Button>{`No of users: ${count}`}</Button>;
};

export default Count;
