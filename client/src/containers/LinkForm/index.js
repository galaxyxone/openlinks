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
   * @param {{ url: string }} data
   */
  const onSubmit = (data) => {
    addLink(data);
    reset();
  };
  return (
    <form className="add-link-container" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Url"
        name="url"
        isRequired
        regex={URL_REGEX}
        control={control}
      />
      <button
        className="add-link-button"
        type="submit"
        disabled={Object.keys(errors).length !== 0}
      >
        Add
      </button>
    </form>
  );
}

LinkForm.propTypes = {
  addLink: PropTypes.func.isRequired,
};



