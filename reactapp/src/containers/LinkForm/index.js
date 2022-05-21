import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import Input from "../../components/Input";
import "../../types.jsdoc";
import { URL_REGEX } from "../../constants";

import "./styles.css";

export default function LinkForm({ addLink }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  /**
   * @description Handles submission behavior of the form.
   * @param {Link} data
   */
  const onSubmit = (data) => {
    addLink(data);
    reset();
  };
  return (
    <div className="add-link-container">
      <Input
        label="Description"
        name="description"
        isRequired
        control={control}
      />
      <Input label="Url" name="url" isRequired regex={URL_REGEX} control={control} />
      <button
        className="add-link-button"
        disabled={Object.keys(errors).length !== 0}
        onClick={handleSubmit(onSubmit)}
      >
        Add
      </button>
    </div>
  );
}

LinkForm.propTypes = {
  addLink: PropTypes.func.isRequired,
};
