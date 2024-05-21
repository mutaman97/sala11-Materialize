import { createFetch } from "@vueuse/core";
import { destr } from "destr";
import { ao as useCookie } from "../ssr.js";
var define_import_meta_env_default = { BASE_URL: "/build/", MODE: "production", DEV: false, PROD: true, SSR: true };
const useApi = createFetch({
  baseUrl: define_import_meta_env_default.VITE_API_BASE_URL || "/api",
  fetchOptions: {
    headers: {
      Accept: "application/json"
    }
  },
  options: {
    refetch: true,
    async beforeFetch({ options }) {
      const accessToken = useCookie("accessToken").value;
      if (accessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`
        };
      }
      return { options };
    },
    afterFetch(ctx) {
      const { data, response } = ctx;
      let parsedData = null;
      try {
        parsedData = destr(data);
      } catch (error) {
        console.error(error);
      }
      return { data: parsedData, response };
    }
  }
});
export {
  useApi as u
};
