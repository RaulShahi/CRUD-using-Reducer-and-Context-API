export const initialFormState = {
    name: "",
    age: "",
    contact: [{ contactNo: "" }, { phoneNo: "" }, { officeNo: "" }],
    email: "",
    category: "",
  };
  
  export const formReducer = (state, action) => {
    switch (action.type) {
      case "USER_INPUT":
        console.log(action.payload);
        return {
          ...state,
          [action.payload.name]: action.payload.val,
        };
  
      case "UPDATE":
        console.log("In update", action.payload);
        return {
          name: action.payload.name,
          age: action.payload.age,
          contact: state.contact.map((item, index) => {
            console.log("Item", item);
            const key = Object.keys(item)[0];
            const value = Object.values(action.payload.contact[index]);
            console.log("Values", value);
            return {
              ...item,
              [key]: value,
            };
          }),
          email: action.payload.email,
          id: action.payload.id,
          category:action.payload.category
        };
      case "USER_CONTACT":
        console.log(action.payload);
        return {
          ...state,
          contact: state.contact.map((item) => {
            const keys = Object.keys(item);
            if (keys[0] === action.payload.name) {
              // console.log(`In ${action.payload.name}`);
              return {
                ...item,
                [action.payload.name]: action.payload.val,
              };
            } else {
              return item;
            }
          }),
        };
  
      default:
        return {
          name: "",
          age: "",
          contact: [{ contactNo: "" }, { phoneNo: "" }, { officeNo: "" }],
          email: "",
          category: ""
        };
    }
  };
  