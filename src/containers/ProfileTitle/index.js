import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "@components/Input";

import "./styles.css";

const FORM_FIELD_NAME = "settings.profileTitle";

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
          {...register(FORM_FIELD_NAME, { required: true })}
          error={
            touchedFields.settings?.profileTitle &&
            dirtyFields.settings?.profileTitle
              ? errors.settings?.profileTitle
              : null
          }
        />
      </div>
    </div>
  );
}

export default ProfileTitle;
