import { stringifyQuery } from "ufo";
import { computed, toValue } from "vue";
const createUrl = (url, options) => computed(() => {
  if (!(options == null ? void 0 : options.query))
    return toValue(url);
  const _url = toValue(url);
  const _query = toValue(options == null ? void 0 : options.query);
  const queryObj = Object.fromEntries(Object.entries(_query).map(([key, val]) => [key, toValue(val)]));
  return `${_url}${queryObj ? `?${stringifyQuery(queryObj)}` : ""}`;
});
export {
  createUrl as c
};
