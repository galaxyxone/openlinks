import { getThemePreviews } from "api";
import { createContext, useContext, useEffect, useState } from "react";

const ThemePreviewsContext = createContext([]);

export const useThemePreviews = () => useContext(ThemePreviewsContext);

const ThemePreviewsContextProvider = ({ children }) => {
  const [previews, setPreviews] = useState([]); // Theme previews -> From API

  // fetch theme previews on component mount
  useEffect(() => {
    getThemePreviews()
      .then((data) => {
        setPreviews(data?.previews);
        console.log(data);
      })
      .catch((err) => console.warn("could not fetch themes! reason:", err));
  }, []);

  return (
    <ThemePreviewsContext.Provider value={previews}>
      {children}
    </ThemePreviewsContext.Provider>
  );
};

export default ThemePreviewsContextProvider;
