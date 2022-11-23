// user lib
import { useAuth0Metadata } from "../../contexts/auth0-metadata.context";
import ThemePreviewsContextProvider from "@contexts/theme-previews.context";
// components
import FormStepper from "@containers/FormStepper";
import LinkForm from "@containers/LinkForm";
import LastExported from "@containers/LastExported";
import SettingsForm from "@containers/SettingsForm";
import {
  LinksPageContainer,
  PageLeftContent,
  PageRightContent,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";

export default function ExportLinksPage() {
  const { metadata } = useAuth0Metadata();
  const formMethods = useForm({ mode: "onBlur" });
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
            <PageRightContent></PageRightContent>
          </LinksPageContainer>
      </FormProvider>
    </ThemePreviewsContextProvider>
  );
}
