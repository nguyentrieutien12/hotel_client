import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterContainer from "./containers/RegisterContainer/RegisterContainer";
import LoginContainer from "./containers/LoginContainer/LoginContainer";
import IndexComponent from "./components/IndexComponent";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterContainer />}></Route>
          <Route path="/login" element={<LoginContainer />}></Route>
          <Route path="/" element={<IndexComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
