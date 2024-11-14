import React from "react";
import { Router } from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
        <ToastContainer />
      </Provider>
    </>
  );
};

export default App;
