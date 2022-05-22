import { useState, useContext, useCallback } from "react";
import Button from "../UI/Button/Button";
import Input from "../Input/Input";
import { crudContext } from "../../store/context";
import { FormContext } from "../../store/FormContext";

import Dropdown from "../Input/Dropdown";

const FormComponent = () => {
  const {
    dispatchCrudData,
    validity,
    validityDispatcher,
    formData,
    formDispatcher,
  } = useContext(crudContext);

  const{edit,setEdit}=useContext(FormContext);
  const [formIsTouched, setFormIsTouched] = useState(false);



  // console.log(validity);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormIsTouched(true);
    const { name, age, contact, email, category } = validity;
    if (
      !name ||
      !age ||
      !email ||
      !contact[0]["contactNo"] ||
      !contact[1]["phoneNo"] ||
      !contact[2]["officeNo"] ||
      !category
    ) {
      return;
    }

    if (!edit) {
      const id = Math.random().toString(36).split(".")[1].concat(Date.now());
      let data = { ...formData, id: id };
      dispatchCrudData({
        type: "CREATE",
        payload: data,
      });
    } else {
      dispatchCrudData({
        type: "EDIT",
        payload: formData,
      });
      setEdit(false);
    }
    formDispatcher({ type: "SUBMIT " });
    validityDispatcher({ type: "CLEAR" });
    setFormIsTouched(false);
  };

  const changeHandler = (event) => {
    formDispatcher({
      type: "USER_INPUT",
      payload: { val: event.target.value, name: event.target.name },
    });

    validityDispatcher({
      type: event.target.name.toUpperCase(),
      payload: { val: event.target.value },
    });
  };

  const contactChangeHandler = (event) => {
    formDispatcher({
      type: "USER_CONTACT",
      payload: { val: event.target.value, name: event.target.name },
    });
    validityDispatcher({
      type: "CONTACT",
      payload: { val: event.target.value, name: event.target.name },
    });
  };

  const resetDropdownHandler = () => {};

  const type = edit ? "Edit" : "Submit";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <Input
          id="name"
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />
        {formIsTouched && !validity.name && (
          <p style={paraStyle}>Please Enter a Valid Name.</p>
        )}
        <Input
          id="age"
          label="Age"
          type="text"
          value={formData.age}
          name="age"
          onChange={changeHandler}
        />
        {formIsTouched && !validity.age && (
          <p style={paraStyle}>Please Enter a Valid Age.</p>
        )}

        <Input
          id="contact"
          label="Contact Number"
          type="text"
          value={`${formData.contact[0].contactNo}`}
          name="contactNo"
          onChange={contactChangeHandler}
        />
        {formIsTouched && !validity.contact[0]["contactNo"] && (
          <p style={paraStyle}>Please Enter a Valid Contact Number</p>
        )}

        <Input
          id="mobile"
          label="Mobile Number"
          type="text"
          value={`${formData.contact[1].phoneNo}`}
          name="phoneNo"
          onChange={contactChangeHandler}
        />
        {formIsTouched && !validity.contact[1]["phoneNo"] && (
          <p style={paraStyle}>Please Enter a Valid Mobile Number</p>
        )}

        <Input
          id="office"
          label="Office Number"
          type="text"
          value={`${formData.contact[2].officeNo}`}
          name="officeNo"
          onChange={contactChangeHandler}
        />
        {formIsTouched && !validity.contact[2]["officeNo"] && (
          <p style={paraStyle}>Please Enter a Valid Office Number</p>
        )}

        <Input
          id="email"
          label="E-Mail Address"
          type="text"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
        {formIsTouched && !validity.email && (
          <p style={paraStyle}>Please Enter a Valid Email.</p>
        )}

        <Dropdown
          id="category"
          label="Category"
          name="category"
          onChange={changeHandler}
          onReset={resetDropdownHandler}
          value={formData.category}
        />

        {formIsTouched && !validity.category && (
          <p style={paraStyle}>Please select your role.</p>
        )}

        <div className="form-actions">
          <Button type="submit">{type}</Button>
        </div>
      </div>
    </form>
  );
};
const paraStyle = {
  color: "red",
};

export default FormComponent;
