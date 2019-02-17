import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const intitialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Eggs" }
  ]
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
