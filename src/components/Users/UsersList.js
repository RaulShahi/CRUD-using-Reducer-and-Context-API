import React, { useState, useContext } from "react";
import EachUser from "./EachUser";
import { crudContext } from "../../store/context";



const UsersList = ({name,onEdit,onDelete,role}) => {
  const {crudData} =useContext(crudContext);
  let usersList = crudData.currentUsers;
  if(name !== ''){
    console.log('Name check running');
    usersList = crudData.currentUsers.filter((item) => {
      if (item["name"].toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
  }
  if(role !== ''){
    usersList =usersList.filter((item)=>{
      if(item['category']===role){
        return item;
      }
      console.log(item.category);
    })
  }
  console.log('UsersList', usersList);
  return (
      <ul>
        {usersList.map((item) => {
          return (
            <EachUser
              key={item.id}
              currentUser={item}
              onClick={onEdit}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
  
  );
};

export default React.memo(UsersList);
