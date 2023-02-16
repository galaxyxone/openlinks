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
import { useMemo } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { extractIdFromAuth0User } from "utils";

const DEFAULT_FORM_VALUES = {
  settings: {},
  links: [],
};

function ExportLinksPage() {
  const { metadata } = useAuth0Metadata();
  const { user } = useAuth0();
  const formMethods = useForm({
    mode: "onBlur",
    defaultValues: DEFAULT_FORM_VALUES,
  });
  const userId = useMemo(() => extractIdFromAuth0User(user), [user]);
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
            {metadata?.cid && (
              <LastExported urlId={userId} />
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
