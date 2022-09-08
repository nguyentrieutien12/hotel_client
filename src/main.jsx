import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/index";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import { getCookie } from "./helpers/cookie.helper";
import "bootstrap/dist/css/bootstrap.min.css";
const options = {
  position: positions.TOP_RIGHT,
  timeout: 2000,
  offset: "30px",
  transition: transitions.FADE,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <App />
      </Provider>
    </AlertProvider>
  </React.StrictMode>
);
// Hehee