const isEmpty = (value) => {
  if (value === null || value === void 0 || value === "")
    return true;
  return !!(Array.isArray(value) && value.length === 0);
};
const isNullOrUndefined = (value) => {
  return value === null || value === void 0;
};
const isEmptyArray = (arr) => {
  return Array.isArray(arr) && arr.length === 0;
};
const isToday = (date) => {
  const today = /* @__PURE__ */ new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};
export {
  isEmptyArray as a,
  isEmpty as b,
  isToday as c,
  isNullOrUndefined as i
};
