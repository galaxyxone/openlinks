import * as PropTypes from "prop-types";
// ui lib
import { Box, capitalize, Typography } from "@mui/material";
// user lib
import { clsx, noop } from "@utils";
// style imports
import "./styles.css";

function ThemeSelector({ name, url, onSelect = noop, selected = false }) {
  const imageAlt = `${name} theme preview`;

  // Handle click on single Theme container
  const handleClick = () => {
    onSelect(name); // fire onSelect event, so parent component can do whatever, upon theme selection.
  };

  return (
    <Box
      className={clsx("theme-container", {
        "selected-theme": selected, // toggle selected-theme class, if this particular theme container is selected
      })}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mr={2}
      onClick={handleClick}
    >
      <Typography mb={2}>{capitalize(name)}</Typography>
      <img className="theme-image" src={url} alt={imageAlt} loading="lazy" />
    </Box>
  );
}

ThemeSelector.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
};

export default ThemeSelector;
