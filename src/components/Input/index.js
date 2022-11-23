import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import { clsx, mergeRefs } from "../../utils";
import "./styles.css";

import { FaPen } from "react-icons/fa";

const Input = React.forwardRef(
  (
    {
      className,
      isRequired = false,
      regex,
      label,
      error,
      errorMsgs,
      onChange,
      onBlur,
      value,
      ...fieldProps
    },
    ref
  ) => {
    const [isEdit, setIsEdit] = useState(false);

    const fieldRef = useRef();

    /**
     * @param {React.SyntheticEvent<HTMLInputElement>} ev
     * @description Blur event handler to disable edit mode as well as support external blur events.
     */
    const handleBlur = (ev) => {
      setIsEdit(false);
      onBlur(ev);
    };

    /**
     * @param {React.SyntheticEvent<HTMLInputElement>} ev
     * @description Change event handler to maintain internal value state as well as support external change events.
     */
    const handleChange = (ev) => {
      onChange(ev);
    };

    // Focus upon pressing edit pencil.
    const focusField = () => {
      /**
       * Push focus to callback queue using setTimeout 0, so by the time callstack is empty,
       * Field is visible to due to state update and fieldRef contains the reference to our input field.
       */
      setTimeout(() => {
        if (fieldRef.current) {
          fieldRef.current.focus();
        }
      }, 0);
    };

    // Enables editing for input field.
    const enableEditMode = () => {
      setIsEdit(true);
      focusField();
    };

    // Adds '*' to lables for required fields.
    const getInputLabel = () => {
      /**
       * Show label as default if value is not set
       * NOTE: Usually initially, when user hasn't added or when user has erased all the characters in the field.
       */
      let inputLabel = value || label;
      if (isRequired && !value) {
        inputLabel += "*";
      }
      return inputLabel;
    };

    return (
      <div className="input-container">
        {isEdit ? (
          <input
            id={fieldProps.name}
            ref={mergeRefs(ref, fieldRef)}
            className={clsx("input-field", className)}
            aria-label={`${label} field`}
            onChange={handleChange}
            onBlur={handleBlur}
            {...fieldProps}
          />
        ) : (
          <p
            className={clsx("input-label", {
              "input-placeholder-label": value == null || value === "", // Enable input-placeholder-label class if value is not set
            })}
            onClick={enableEditMode}
          >
            {getInputLabel()}
            <FaPen className="input-edit-icon" />
          </p>
        )}
        {/* Move to an error component that renders each of them if there are many */}
        {error != null && error.type === "required" && (
          <span className="input-error-message">{label} is required.</span>
        )}
        {error != null && error.type === "pattern" && (
          <span className="input-error-message">
            {errorMsgs?.pattern || `Value doesn't match the format of ${label}`}
          </span>
        )}
      </div>
    );
  }
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.object,
  errorMsgs: PropTypes.object,
};

export default Input;
