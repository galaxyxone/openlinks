import { Box } from "@mui/material";
// user lib
import ThemeSelector from "@components/ThemeSelector";
import { Controller, useFormContext } from "react-hook-form";
import { useThemePreviews } from "@contexts/theme-previews.context";

const DEFAULT_THEME = "light";
const FORM_FIELD_NAME = "settings.theme";

function ThemeSelectionList() {
  const { control } = useFormContext();
  const previews = useThemePreviews();

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
