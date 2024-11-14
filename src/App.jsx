import React from "react";
import { Router } from "./shared/Router";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Router />
        <ToastContainer />
      </Provider>
    </>
  );
};

export default App;
