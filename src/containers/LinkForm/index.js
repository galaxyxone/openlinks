// core imports
import React, { useEffect } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
// ui lib
import { FaTrash } from "react-icons/fa";
// user components
import Input from "@components/Input";
// user misc
import { URL_REGEX } from "../../constants";
// style import
import "./styles.css";

function LinkForm() {
  const { control, clearErrors, setError } = useFormContext();

  const { fields, insert, remove } = useFieldArray({
    name: "links",
    control,
    shouldUnregister: true,
  });

  /**
   * @description Adds a new field to form
   */
  const addField = () => {
    insert(0);
  };

  /**
   * @param {number} idx
   * @returns {(ev: React.SyntheticEvent<HTMLInputElement>) => void}
   * @description removes field from form
   */
  const removeField = (idx) => (ev) => {
    ev.stopPropagation();
    remove(idx);
  };

  useEffect(() => {
    if (fields.length > 0) {
      setTimeout(() => {
        clearErrors("custom");
      }, 0);
    } else {
      setTimeout(() => {
        setError("custom", { type: "custom" });
      }, 0);
    }
  }, [fields, clearErrors, setError]);

  const addLinkBtnText = fields.length === 0 ? "Add Link" : "Another Link";

  return (
    <div>
      <button className="btn-primary add-link-button" onClick={addField}>
        {addLinkBtnText}
      </button>
      {fields.map((field, idx) => (
        <div className="fields-container" key={field.id}>
          <Controller
            control={control}
            name={`links.${idx}.title`}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                isRequired
                error={
                  fieldState.isTouched && fieldState.isDirty
                    ? fieldState.error
                    : null
                }
                label="Title"
              />
            )}
          />
          <Controller
            control={control}
            name={`links.${idx}.url`}
            rules={{
              required: true,
              pattern: URL_REGEX,
            }}
            render={({ field, fieldState }) => (
              <Input
                isRequired
                {...field}
                error={
                  fieldState.isTouched && fieldState.isDirty
                    ? fieldState.error
                    : null
                }
                errorMsgs={{
                  pattern: "URL needs to be in format http://example.com",
                }} // Error messages by type
                label="Url"
              />
            )}
          />
          <div className="fields-footer">
            <button
              className="icon-btn delete-link-button"
              onClick={removeField(idx)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LinkForm;
