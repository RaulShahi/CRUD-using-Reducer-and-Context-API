import React, { Fragment, useContext } from "react";
import { crudContext } from "../../store/context";

const EachUser = (props) => {
  const { crudData, dispatchCrudData } = useContext(crudContext);
  console.log('Crud data after a submission', crudData);

  const keys = Object.keys(props.currentUser);
  
  keys.splice(2, 1, "contactNo", "phoneNo", "officeNo");
  // const { contactNo, phoneNo, officeNo } = props.currentUser.contact; if direct object was used for contact
  const [contact,phone, office] = props.currentUser.contact;
  const{contactNo} = contact;
  const {phoneNo} = phone;
  const {officeNo} = office;
  const all = {
    ...props.currentUser,
    contactNo: contactNo,
    phoneNo: phoneNo,
    officeNo: officeNo,
  };
  let iD = all.id;

  const editHandler = () => {

    props.onClick(iD);
  };

  return (
      <div style={listStyle}>
        {keys.map((item) => {
          if (item !== "id") {
            return (
              <div key={item}>
                <li>{`${item}: ${all[item]}`}</li>
              </div>
            );
          }
        })}

        <div style={buttonDiv}>
          <button onClick={editHandler}>Edit</button>
          <button
            onClick={() => {
              dispatchCrudData({ type: "DELETE", payload: iD });
              props.onDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
      
  );
};

const listStyle = {
  border: "1px solid black",
  margin: "1rem",
  padding: "1rem",
  borderRadius: "10px",
};

const buttonDiv = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "1rem",
};

export default React.memo(EachUser);
