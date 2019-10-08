import { createStore } from "redux";

const initialState = {
  count: 3,
  formData: "Hello Redux"
};

const reducer = (state = initialState, action) => {
  console.log("reducer running", action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "ADD":
      return {
        ...state,
        formData: action.payload
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
