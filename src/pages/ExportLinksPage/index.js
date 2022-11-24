// node modules
import { FormProvider, useForm } from "react-hook-form";
// user lib
import { useAuth0Metadata } from "@contexts/auth0-metadata.context";
import ThemePreviewsContextProvider from "@contexts/theme-previews.context";
// components
import FormStepper from "@containers/FormStepper";
import LinkForm from "@containers/LinkForm";
import LastExported from "@containers/LastExported";
import SettingsForm from "@containers/SettingsForm";
import LivePreview from "@containers/LivePreview";

import {
  LinksPageContainer,
  PageLeftContent,
  PageRightContent,
} from "./styles";

const DEFAULT_FORM_VALUES = {
  settings: {},
  links: []
}

function ExportLinksPage() {
  const { metadata } = useAuth0Metadata();
  const formMethods = useForm({ mode: "onBlur", defaultValues: DEFAULT_FORM_VALUES });
  return (
    <ThemePreviewsContextProvider>
      <FormProvider {...formMethods}>
        <LinksPageContainer>
          <PageLeftContent>
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
          </PageLeftContent>
          <PageRightContent>
            <LivePreview />
          </PageRightContent>
        </LinksPageContainer>
      </FormProvider>
    </ThemePreviewsContextProvider>
  );
}

export default ExportLinksPage;
