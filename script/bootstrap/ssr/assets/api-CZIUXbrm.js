import { ofetch } from "ofetch";
import { ao as useCookie } from "../ssr.js";
var define_import_meta_env_default = { BASE_URL: "/build/", MODE: "production", DEV: false, PROD: true, SSR: true };
const $api = ofetch.create({
  baseURL: define_import_meta_env_default.VITE_API_BASE_URL || "/api",
  async onRequest({ options }) {
    const accessToken = useCookie("accessToken").value;
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`
      };
    }
  }
});
export {
  $api as $
};
