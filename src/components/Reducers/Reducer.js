export const initialCrudState = {
  currentUsers: [],
}
export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "CREATE":
      console.log(action.payload);
        return {
          ...state,
          currentUsers: state.currentUsers.concat(action.payload),
        };
  

    case "EDIT":
      console.log('When edit is clicked',action.payload);
      return {
        ...state,
        currentUsers:  state.currentUsers.map((item)=>{
          if(item.id !== action.payload.id){
            return item;
          }
          else{
            return action.payload
          }
        }),
      }

    case "DELETE":
      return {
        ...state,
        currentUsers: state.currentUsers.filter(
          (item) => action.payload !== item.id
        ),

      };

    default:
      return state;
  }
};
