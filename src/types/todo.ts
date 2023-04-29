// Todo state interface
export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

// Todo action constants
export enum TodoActionTypes {
  FETCH_TODO = "FETCH_TODO",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

// Todo action interfaces
interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODO;
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODO_SUCCESS;
  payload: any[];
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODO_ERROR;
  payload: string;
}

interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

// Todo Action type
export type ToDoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetTodoPage;
