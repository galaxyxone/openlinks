import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";

import "./styles.css";

/**
 *
 * @typedef ExportProps
 * @property {(data: ExportData) => Promise<void>} exportFile
 * @property {string[]} links
 */

/**
 * @param {ExportProps} props
 * @returns {JSX.Element}
 */
export default function Export({ exportFile, links }) {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  /**
   * @description Handles click on Export button.
   * @param {{ filename: string }} data
   */
  const handleExport = ({ filename }) => {
    exportFile({ filename, links });
  };

  return (
    links.length > 0 && (
      <form onSubmit={handleSubmit(handleExport)}>
        <h2 className="export-heading">Export File</h2>
        <div className="export-container">
          <Input
            label="Filename"
            {...register("filename", { required: true })}
            error={errors.filename}
          />
          <button
            disabled={errors.filename || !isValid}
            className="btn-primary export-btn"
            type="submit"
          >
            Export
          </button>
        </div>
      </form>
    )
  );
}
