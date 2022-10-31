// core imports
import React from "react";
// user lib
import { useAuth0Metadata } from "../../contexts/auth0-metadata.context";
// components
import FormStepper from "@containers/FormStepper";
import LinkForm from "@containers/LinkForm";
import LastExported from "@containers/LastExported";
import SettingsForm from "@containers/SettingsForm";

import "./styles.css";

export default function ExportLinksPage() {
  const { metadata } = useAuth0Metadata();
  return (
    <div className="links-page-container">
      <FormStepper
        steps={[
          {
            label: "Fill in Links",
            content: <LinkForm />,
            formKey: "links",
          },
          {
            label: "Setup your page",
            content: <SettingsForm />,
            formKey: "settings",
          },
        ]}
      />
      {/* Only show last exported page when user is authenticated and user's data is fetched through management API successfully */}
      {metadata?.cid && metadata?.filename && (
        <LastExported cid={metadata.cid} filename={metadata.filename} />
      )}
    </div>
  );
}
