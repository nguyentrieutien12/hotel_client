import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterContainer from "./containers/RegisterContainer/RegisterContainer";
import LoginContainer from "./containers/LoginContainer/LoginContainer";
import IndexComponent from "./components/IndexComponent";
import ProtectedLayout from "./containers/ProtectedLayout/ProtectedLayout";
import ProfileContainerAdmin from "./containers/Admin/Profile/ProfileContainerAdmin";
import NotFoundComponent from "./components/NotFound/NotFoundComponent";
import AccountComponentAdmin from "./components/Admin/Account/AccountComponentAdmin";
import MainContainerAdmin from "./containers/Admin/Main/MainContainerAdmin";
import AccountContainerAdmin from "./containers/Admin/Account/AccountContainerAdmin";
import HotelContainerAdmin from "./containers/Admin/Hotel/HotelContainerAdmin";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterContainer />}></Route>
          <Route path="/login" element={<LoginContainer />}></Route>
          <Route path="/" element={<IndexComponent />}></Route>
          <Route path="/dashboard" element={<ProtectedLayout />}>
            <Route index element={<MainContainerAdmin />} />
            <Route path="profile" element={<ProfileContainerAdmin />} />
            <Route path="account" element={<AccountContainerAdmin />} />
            <Route path="hotel" element={<HotelContainerAdmin />} />
          </Route>
          <Route path="*" element={<NotFoundComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
