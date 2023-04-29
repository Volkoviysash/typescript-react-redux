import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

// Main reducer that combines all reducers in app
export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

// Get root reducer's type
export type RootState = ReturnType<typeof rootReducer>;
