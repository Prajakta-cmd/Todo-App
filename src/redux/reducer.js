import {
  ADD_ACTIVE_TODO,
  REMOVE_ACTIVE_TODO,
  ADD_COMPLTED_TODO,
  REMOVE_COMPLETED_TODO,
} from "./types";

const initialState = {
  active: [],
  completed: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVE_TODO:
      return {
        ...state,
        active: [...state.active, action.payload],
      };
    case REMOVE_ACTIVE_TODO:
      var datum1 = state.active;
      datum1.splice(datum1.indexOf(action.payload), 1);
      return {
        ...state,
        active: [...datum1],
      };
    case ADD_COMPLTED_TODO:
      return {
        ...state,
        completed: [...state.completed, action.payload],
      };
    case REMOVE_COMPLETED_TODO:
      var datum2 = state.completed;
      datum2.splice(datum2.indexOf(action.payload), 1);
      return {
        ...state,
        completed: [...datum2],
      };
    default:
      return state;
  }
};
