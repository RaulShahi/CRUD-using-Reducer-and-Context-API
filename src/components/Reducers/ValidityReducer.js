export const initialValidity = {
    name: null,
    age: null,
    contact: [{ contactNo: null }, { phoneNo: null }, { officeNo: null }],
    email: null,
    category: null,
  };

export const validityReducer = (state, action) => {
    switch (action.type) {
      case "NAME":
        const hasNumber = /\d/;
        return {
          ...state,
          name:
            action.payload.val.trim() !== "" &&
            !hasNumber.test(action.payload.val),
        };
      case "AGE":
        return {
          ...state,
          age:
            action.payload.val.trim() !== "" &&
            !isNaN(action.payload.val) &&
            action.payload.val > 0 &&
            action.payload.val.length < 3,
        };
      case "EMAIL":
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return {
          ...state,
          email: emailRegex.test(action.payload.val),
        };
      case "CONTACT":
        return {
          ...state,
          contact: state.contact.map((item) => {
            const keys = Object.keys(item);
            if (keys[0] === action.payload.name) {
              console.log(`In ${action.payload.name}`);
              return {
                ...item,
                [action.payload.name]:
                  action.payload.val.trim() !== "" &&
                  !isNaN(action.payload.val) &&
                  action.payload.val.length === 10,
              };
            } else {
              return item;
            }
          }),
        };
      case "CATEGORY":
        console.log(action.payload);
        return {
          ...state,
          category: action.payload.val !== "",
        };
      case "ALL_TRUE":
        return {
          ...state,
          name: true,
          age: true,
          contact: [{ contactNo: true }, { phoneNo: true }, { officeNo: true }],
          email: true,
          category:true,
        };
      default:
        return {
          ...state,
          name: null,
          age: null,
          contact: [{ contactNo: null }, { phoneNo: null }, { officeNo: null }],
          email: null,
          category:null
        };
    }
  };