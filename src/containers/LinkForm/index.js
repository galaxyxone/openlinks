import React from "react";
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from "react-hook-form";

import Input from "../../components/Input";
import "../../types.jsdoc";
import { URL_REGEX } from "../../constants";
import { FaTrash } from "react-icons/fa"

import "./styles.css";

function LinkForm({ onSubmit: onSubmitHandler }) {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, dirtyFields, touchedFields },
  } = useForm({ mode: "onBlur" });

  const { fields, insert, remove } = useFieldArray({ name: "links", control, shouldUnregister: true });

  /**
   * @description Handles submission behavior of the form.
   * @param {{links: { title: string, url: string }[] }} data
   */
  const onSubmit = (data) => {
    onSubmitHandler(data.links);
    reset();
  };

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button className="btn-primary add-link-button" onClick={addField}>
        Add Links
      </button>
      {fields.map((field, idx) => (
        <div className="fields-container" key={field.id}>
          <Input
            {...register(`links.${idx}.title`, { required: true })}
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
      <div>
        <button
          className="btn-primary submit-link-button"
          type="submit"
          disabled={fields.length === 0 || !isValid}
        >
          Next
        </button>
      </div>
    </form>
  );
}

LinkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LinkForm;
