// core imports
import React from "react";
// user components
import FormStepper from "@containers/FormStepper";
import LinkForm from "@containers/LinkForm";
import SettingsForm from "@containers/SettingsForm";

import "./styles.css";

/**
 * @typedef GenerateLinksPageProps
 * @property {import("../../Auth/Auth").default} auth
 */

/**
 * @param {GenerateLinksPageProps} props
 * @returns
 */

export default function ExportLinksPage({ auth }) {
  return (
    <div className="links-page-container">
      <FormStepper
        auth={auth}
        steps={[
          {
            label: "Fill in Links",
            content: <LinkForm />,
            formKey: "links",
          },
          {
            label: "Setup your page",
            content: <SettingsForm auth={auth} />,
            formKey: "settings",
          },
        ]}
      />
    </div>
  );
}
