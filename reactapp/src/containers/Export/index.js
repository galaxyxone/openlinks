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
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();
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
        <h2>Export File</h2>
        <div className="export-container">
          <Input
            label="Filename"
            name="filename"
            isRequired
            control={control}
          />
          <button
            disabled={Object.keys(errors).length > 0}
            className="export-btn"
            type="submit"
          >
            Export
          </button>
        </div>
      </form>
    )
  );
}
