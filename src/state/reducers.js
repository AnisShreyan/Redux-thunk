import { combineReducers } from "redux";

const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS":
      return (state = [...action.payload]);

      break;

    default:
      return state;
      break;
  }
};

export const Reducer = combineReducers({ ProductReducer });
