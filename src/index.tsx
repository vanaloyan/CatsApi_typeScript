import React, { DOMElement } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { StyledGlobal } from "./Global.styled";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledGlobal />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
