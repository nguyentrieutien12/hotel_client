import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterContainer from "./containers/RegisterContainer/RegisterContainer";
import LoginContainer from "./containers/LoginContainer/LoginContainer";
import IndexComponent from "./components/IndexComponent";
import ProtectedLayout from "./containers/ProtectedLayout/ProtectedLayout";
import ProfileContainerAdmin from "./containers/Admin/Profile/ProfileContainerAdmin";
import NotFoundComponent from "./components/NotFound/NotFoundComponent";
import MainContainerAdmin from "./containers/Admin/Main/MainContainerAdmin";
import AccountContainerAdmin from "./containers/Admin/Account/AccountContainerAdmin";
import HotelContainerAdmin from "./containers/Admin/Hotel/HotelContainerAdmin";
import SpaContainerAdmin from "./containers/Admin/Spa/SpaContainerAdmin";
import OptionContainerAdmin from "./containers/Admin/Option/OptionContainerAdmin";
import SpaComponentAdmin from "./components/Admin/Spa/SpaComponentAdmin";
import RestaurantContainerAdmin from "./containers/Admin/Restaurant/RestaurantContainerAdmin";
import GymContainerAdmin from "./containers/Admin/Gym/GymContainerAdmin";
import SeftCareContainerAdmin from "./containers/Admin/SeftCare/SeftCareContainerAdmin";
import TreatmentContainer from "./containers/Admin/Treatment/TreatmentContainer";
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
            <Route path="hotel/:id" element={<OptionContainerAdmin />}>
              <Route index element={<SpaContainerAdmin />} />
              <Route path="spa" element={<SpaContainerAdmin />}></Route>

              <Route path="spa/:spaId" element={<TreatmentContainer />} />
              <Route path="restaurant" element={<RestaurantContainerAdmin />} />
              <Route path="gym" element={<GymContainerAdmin />} />
              <Route path="seftcare" element={<SeftCareContainerAdmin />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
