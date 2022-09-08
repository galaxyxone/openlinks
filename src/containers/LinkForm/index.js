// core imports
import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
// ui lib
import { FaTrash } from "react-icons/fa"
// user components
import Input from "@components/Input";
// user misc
import "../../types.jsdoc";
import { URL_REGEX } from "../../constants";
// style import
import "./styles.css";

function LinkForm() {
  const {
    control,
    register,
    clearErrors,
    setError,
    formState: { dirtyFields, errors, touchedFields },
  } = useFormContext();

  const { fields, insert, remove } = useFieldArray({ name: "links", control, shouldUnregister: true });
 
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
        setError("custom", { type: 'custom' })
      }, 0);
    }
  }, [fields, clearErrors, setError]);

  return (
    <div>
      <button className="btn-primary add-link-button" onClick={addField}>
        Another Link
      </button>
      {fields.map((field, idx) => (
        <div className="fields-container" key={field.id}>
          <Input
            {...register(`links.${idx}.title`, { required: true })}
            isRequired
            error={
              dirtyFields.links &&
              dirtyFields.links[idx]?.title &&
              touchedFields.links &&
              touchedFields.links[idx]?.title
                ? errors?.links && errors.links[idx]?.title
                : null
            }
            label="Title"
          />
          <Input
            {...register(`links.${idx}.url`, {
              required: true,
              pattern: URL_REGEX,
            })}
            isRequired
            error={
              dirtyFields.links &&
              dirtyFields.links[idx]?.url &&
              touchedFields.links &&
              touchedFields.links[idx]?.url
                ? errors?.links && errors.links[idx]?.url
                : null
            }
            errorMsgs={{
              pattern: "URL needs to be in format http://example.com",
            }} // Error messages by type
            label="Url"
          />
          <div className="fields-footer">
            <button className="icon-btn delete-link-button" onClick={removeField(idx)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default LinkForm;
