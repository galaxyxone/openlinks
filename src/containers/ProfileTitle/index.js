import { Controller, useFormContext } from "react-hook-form";
import Input from "@components/Input";

import "./styles.css";

const FORM_FIELD_NAME = "settings.profileTitle";

function ProfileTitle() {
  const { control } = useFormContext();

  return (
    <div>
      <div className="export-container">
        <Controller
          name={FORM_FIELD_NAME}
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Input
              label="Profile Title"
              isRequired
              {...field}
              error={
                fieldState.isTouched && fieldState.isDirty
                  ? fieldState.error
                  : null
              }
            />
          )}
        />
      </div>
    </div>
  );
}

export default ProfileTitle;
