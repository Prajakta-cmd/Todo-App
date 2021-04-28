import {
  ADD_ACTIVE_TODO,
  REMOVE_ACTIVE_TODO,
  ADD_COMPLTED_TODO,
  REMOVE_COMPLETED_TODO,
} from "./types";

export const addActiveTodo = (todo) => {
  return {
    type: ADD_ACTIVE_TODO,
    payload: todo,
  };
};

export const removeActiveTodo = (todo) => {
  return {
    type: REMOVE_ACTIVE_TODO,
    payload: todo,
  };
};

export const addCompletedTodo = (todo) => {
  return {
    type: ADD_COMPLTED_TODO,
    payload: todo,
  };
};

export const removeCompletedTodo = (todo) => {
  return {
    type: REMOVE_COMPLETED_TODO,
    payload: todo,
  };
};
