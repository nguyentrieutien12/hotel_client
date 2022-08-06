import React from "react";
import LoginComponent from "./components/Login/LoginComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from "./components/Register/RegisterComponent";
import RegisterContainer from "./containers/RegisterContainer/RegisterContainer";
import LoginContainer from "./containers/LoginContainer/LoginContainer";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterContainer />}></Route>
          <Route path="/login" element={<LoginContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
