// node modules
import { useEffect, useState } from "react";
// user lib
import * as api from "api";

/**
 *
 * @param {string} themeName
 * @returns {ThemeConfig | null}
 */
const useThemeConfig = (themeName) => {
  const [themeConfigs, setThemeConfigs] = useState([]);

  // fetch theme config
  useEffect(() => {
    api
      .getThemeConfig()
      .then((configs) => {
        setThemeConfigs(configs);
      })
      .catch((err) =>
        console.warn("Could not fetch theme configs! reason:", err)
      );
  }, []);

  return themeConfigs.find((theme) => theme.name === themeName); // null, in case theme does not exist or theme name itself is null
};;

export default useThemeConfig;
