// node modules
import { useMemo } from "react";
// user lib
import useFormValues from "@hooks/useFormValues";
// styles
import { DeviceFrame } from "./styles";
import { useThemePreviews } from "@contexts/theme-previews.context";
import useThemeConfig from "@hooks/useThemeConfig";

function LivePreview() {
  const {
    settings: { theme, ...settings },
  } = useFormValues();

  const themeConfig = useThemeConfig(theme);

  if (themeConfig == null) {
    return <p>Loading...</p>;
  }

  return (
    <DeviceFrame>
      {settings?.profileTitle != null && <p>{settings.profileTitle}</p>}
      <p>{JSON.stringify(themeConfig, null, 2)}</p>
    </DeviceFrame>
  );
}

export default LivePreview;
