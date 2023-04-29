import { UserAction, UserState, UsersActionTypes } from "../../types/user";

// states
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// reducer
export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return { users: [], loading: true, error: null };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null };
    case UsersActionTypes.FETCH_USERS_ERROR:
      return { users: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
