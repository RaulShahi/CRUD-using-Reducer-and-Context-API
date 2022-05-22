import React, { useState } from "react";
import Dropdown from "../Input/Dropdown";

import classes from './Search.module.css'

const Search = (props) => {
 const[text, setText]= useState('');

 const changeTextHandler=(event)=>{
    setText(prevState=>{
        prevState = event.target.value;
        props.onSearch(prevState);
        return prevState;

    })
 };

 const selectRoleHandler = (event)=>{
   console.log(event.target.value);
   props.onSelectRole(event.target.value);
 }

  return (
    <form>
      <div className={classes.div}>
        <input
          type="text"
          name="text"
          className="form-control"
          placeholder="Search Members..."
          value={text}
          onChange={changeTextHandler}
        />
        <Dropdown onChange={selectRoleHandler}/>
      </div>
    </form>
  );
};



export default Search;
