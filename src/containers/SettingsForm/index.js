import React from "react";
// user lib
import ProfileTitle from "@containers/ProfileTitle";
import ProfilePicture from "@containers/ProfilePicture";
import ThemeSelectionList from "@containers/ThemeSelectionList";
// style imports
import "./styles.css";

function SettingsForm() {
  return (
    <React.Fragment>
      {/* Profile Picture Section in Settings step */}
      <ProfilePicture />
      {/* Theme selection list */}
      <ThemeSelectionList />
      {/* Profile Title Section in Settings step */}
      <ProfileTitle />
    </React.Fragment>
  );
}

export default SettingsForm;
