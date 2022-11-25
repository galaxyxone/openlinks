// node modules
import { Typography } from "@mui/material";
// user lib
import useFormValues from "@hooks/useFormValues";
import useThemeConfig from "@hooks/useThemeConfig";
// styles
import { DeviceFrame } from "./styles";

function LivePreview() {
  const {
    settings: { theme, ...settings },
  } = useFormValues();

  const themeConfig = useThemeConfig(theme);

  if (themeConfig == null) {
    return <Typography margin={2}>Loading...</Typography>;
  }

  return (
    <DeviceFrame>
      {settings?.profileTitle != null && <p>{settings.profileTitle}</p>}
      <p>{JSON.stringify(themeConfig, null, 2)}</p>
    </DeviceFrame>
  );
}

export default LivePreview;
