import uuid from "uuid";
import { GET_ITEMS } from "../actions/types";
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
    default:
      return state;
  }
}
