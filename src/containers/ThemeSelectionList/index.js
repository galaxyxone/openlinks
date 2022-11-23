import { Box } from "@mui/material";
import { useEffect, useState } from "react";
// api
import { getThemePreviews } from "@api";
// user lib
import ThemeSelector from "@components/ThemeSelector";
import { useFormContext } from "react-hook-form";

const DEFAULT_THEME = "light";

function ThemeSelectionList() {
  const [previews, setPreviews] = useState([]); // Theme previews -> From API
  const [selectedTheme, setSelectedTheme] = useState(() => DEFAULT_THEME);

  const { register, setValue } = useFormContext();

  const formFieldName = "settings.theme";

  // add 'theme' field in our settings form
  useEffect(() => {
    register(formFieldName, {
      value: selectedTheme,
    });
  }, [register, selectedTheme]);

  // handle theme selection
  const handleThemeSelection = (themeName) => {
    setValue(formFieldName, themeName);
    setSelectedTheme(themeName);
  };

  // get theme previews from API
  useEffect(() => {
    getThemePreviews().then((data) => {
      setPreviews(data?.previews);
      console.log(data);
    });
  }, []);

  // render Theme list
  return (
    <Box>
      {/* <Typography variant="h6">Select Theme:</Typography> */}
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {previews.map((preview) => (
          <ThemeSelector
            key={preview.name}
            {...preview}
            onSelect={handleThemeSelection}
            selected={selectedTheme === preview?.name}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ThemeSelectionList;
