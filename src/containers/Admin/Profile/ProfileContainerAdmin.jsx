import React, { memo } from "react";
import Profile from "../../../components/Admin/Profile/Profile";

function ProfileContainerAdmin() {
  return (
    <div>
      <Profile />
    </div>
  );
}
export default memo(ProfileContainerAdmin);
