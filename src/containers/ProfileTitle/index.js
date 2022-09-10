import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "@components/Input";

import "./styles.css";

/**
 *
 * @typedef ProfileTitleProps
 * @property {(data: ExportData) => Promise<void>} exportFile
 * @property {string[]} links
 */

/**
 * @param {ProfileTitleProps} props
 * @returns {JSX.Element}
 */
function ProfileTitle() {
  const {
    register,
    formState: { errors, dirtyFields, touchedFields },
  } = useFormContext();

  return (
    <div>
      <div className="export-container">
        <Input
          label="Profile Title"
          isRequired
          {...register("settings.profileTitle", { required: true })}
          error={
            touchedFields.settings?.profileTitle && dirtyFields.settings?.profileTitle
              ? errors.settings?.profileTitle
              : null
          }
        />
      </div>
    </div>
  );
}

export default ProfileTitle;
