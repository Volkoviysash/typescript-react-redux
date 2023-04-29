import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import UserList from "./components/UserList";

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
      <UserList />
    </Provider>
  );
}

export default App;
