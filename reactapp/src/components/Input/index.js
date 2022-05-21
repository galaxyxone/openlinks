import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

import { clsx, filterNullValues } from "../../utils";
import "./styles.css";

export default function Input({
  className,
  control,
  defaultValue = "",
  isRequired = false,
  label,
  regex,
  name,
}) {
  const rules = useMemo(
    () => filterNullValues({ required: isRequired, pattern: regex }),
    [isRequired, regex]
  );
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules
  });

  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      {/* Move to an error component that renders each of them if there are many */}
      {error != null && error.type === "required" && (
        <span className="input-error-message">This field is required.</span>
      )}
      {error != null && error.type === "pattern" && (
        <span className="input-error-message">Invalid value.</span>
      )}
      <input
        ref={field.ref}
        value={field.value}
        className={clsx("input-field", className)}
        aria-label={`${label} field`}
        onChange={field.onChange}
        onBlur={field.onBlur}
        id={name}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regex: PropTypes.instanceOf(RegExp),
  control: PropTypes.object.isRequired, // control is of type Control from react-hook-form
};
