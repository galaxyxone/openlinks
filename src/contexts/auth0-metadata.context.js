import { useAuth0 } from "@auth0/auth0-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUserDetails, updateUserDetails } from "../api";
import { auth0Config } from "../auth0.config";

export const Auth0MetadataContext = createContext();

export const useAuth0Metadata = () => useContext(Auth0MetadataContext);

/**
 * @typedef {import('../types').Metadata} Metadata
 */

/**
 * @typedef {(metadata: Metadata) => Promise<Metadata> UpdateMetadata
 */

function Auth0MetadataProvider({ children }) {
  const auth0 = useAuth0();
  /** @type [Metadata, React.Dispatch<MetaData>] */
  const [metadata, setMetadata] = useState(null);

  /**
   * @type {UpdateMetadata}
   * @description Used to update metadata for the user
   */
  const updateMetadata = useCallback(
    async (metadata = {}) => {
      if (auth0.isAuthenticated) {
        try {
          const accessToken = await auth0.getAccessTokenSilently({
            audience: auth0Config.audience,
            scope: auth0Config.scope,
          });
          const response = await updateUserDetails(
            auth0.user?.sub,
            accessToken,
            {
              user_metadata: metadata,
            }
          );
          setMetadata(response?.user_metadata);
          return Promise.resolve(response?.user_metadata);
        } catch (err) {
          debugger;
          console.error(err);
          return Promise.reject(err);
        }
      }
    },
    [auth0]
  );

  // get metadata when app is loaded
  useEffect(() => {
    const getMetadata = async () => {
      if (auth0.isAuthenticated) {
        try {
          const accessToken = await auth0.getAccessTokenSilently({
            audience: auth0Config.audience,
            scope: auth0Config.scope,
          });
          const response = await getUserDetails(auth0.user?.sub, accessToken);
          setMetadata(response?.user_metadata);
        } catch (err) {
          console.error(err);
          alert("Couldn't read user profile! logging out...");
          auth0.logout();
        }
      }
    };
    getMetadata();
  }, [auth0]);

  /**
   * @type {{ metadata: Metadata, updateMetadata: UpdateMetadata }}
   */
  const contextValue = { metadata, updateMetadata };

  return (
    <Auth0MetadataContext.Provider value={contextValue}>
      {children}
    </Auth0MetadataContext.Provider>
  );
}

export default Auth0MetadataProvider;
