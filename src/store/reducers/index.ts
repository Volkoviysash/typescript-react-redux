import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

// Main reducer that combines all reducers in app
export const rootReducer = combineReducers({
  user: userReducer,
});

// Get root reducer's type
export type RootState = ReturnType<typeof rootReducer>;
