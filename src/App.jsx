import React from "react";
import { Router } from "./shared/Router";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Provider Store={Store}>
        <Router />
        <ToastContainer />
      </Provider>
    </>
  );
};

export default App;
