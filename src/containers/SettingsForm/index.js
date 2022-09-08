import React from "react";
import ProfileTitle from "@containers/ProfileTitle";
import ProfilePicture from "@containers/ProfilePicture";

import "./styles.css";

// TODO: Use context api for auth
function SettingsForm({ auth }) {
  return (
    <React.Fragment>
      {/* Profile Picture Section in Settings step */}
      <ProfilePicture auth={auth} />
      {/* Profile Title Section in Settings step */}
      <ProfileTitle />
    </React.Fragment>
  );
}

export default SettingsForm;
