import { Dispatch } from "redux";
import { ToDoAction, TodoActionTypes } from "../../types/todo";
import axios from "axios";

export const fetchTodos = (page: number = 1, limit: number = 10) => {
  return async (dispatch: Dispatch<ToDoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODO });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _page: page, _limit: limit } }
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODO_SUCCESS,
          payload: response.data,
        });
      }, 100);
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload: "An error occurred when receiving todos",
      });
    }
  };
};

export const SetTodoPage = (page: number) => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
};
