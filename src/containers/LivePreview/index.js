// node modules
import { Typography } from "@mui/material";
import { ThemeProvider } from "styled-components";
// user lib
import { useAuth0Metadata } from "@contexts/auth0-metadata.context";
import useFormValues from "@hooks/useFormValues";
import useThemeConfig from "@hooks/useThemeConfig";
// styles
import {
  DeviceFrame,
  PreviewLinksContainer,
  PreviewLinkButton,
  PreviewLinksAvatar,
  PreviewScreen,
  PreviewProfileTitle,
} from "./styles";

function LivePreview() {
  const {
    settings: { theme, ...settings },
    links,
  } = useFormValues();
  const { metadata } = useAuth0Metadata();

  const themeConfig = useThemeConfig(theme);

  if (themeConfig == null) {
    return <Typography margin={2}>Loading Preview...</Typography>;
  }

  return (
    <DeviceFrame>
      <ThemeProvider theme={themeConfig}>
        <PreviewScreen>
          <PreviewLinksAvatar src={metadata?.profilePicture} />
          {settings?.profileTitle && (
            <PreviewProfileTitle style={themeConfig?.title?.styles}>
              {settings.profileTitle}
            </PreviewProfileTitle>
          )}
          <PreviewLinksContainer>
            {links.map((link, idx) => (
              <PreviewLinkButton
                key={`${link.title}-${idx}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link?.title}
              </PreviewLinkButton>
            ))}
          </PreviewLinksContainer>
        </PreviewScreen>
      </ThemeProvider>
    </DeviceFrame>
  );
}

export default LivePreview;
