import { Box } from "@mui/material";
import { useEffect, useState } from "react";
// api
import { getThemePreviews } from "@api";
// user lib
import ThemeSelector from "@components/ThemeSelector";
import { Controller, useFormContext } from "react-hook-form";

const DEFAULT_THEME = "light";
const FORM_FIELD_NAME = "settings.theme";

function ThemeSelectionList() {
  const [previews, setPreviews] = useState([]); // Theme previews -> From API

  const { control } = useFormContext();

  // get theme previews from API
  useEffect(() => {
    getThemePreviews().then((data) => {
      setPreviews(data?.previews);
      console.log(data);
    });
  }, []);

  // render Theme list
  return (
    <Controller
      control={control}
      name={FORM_FIELD_NAME}
      defaultValue={DEFAULT_THEME}
      render={({ field }) => (
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {previews.map((preview) => (
            <ThemeSelector
              key={preview.name}
              {...preview}
              onSelect={field.onChange}
              selected={field.value === preview?.name}
            />
          ))}
        </Box>
      )}
    />
  );
}

export default ThemeSelectionList;
