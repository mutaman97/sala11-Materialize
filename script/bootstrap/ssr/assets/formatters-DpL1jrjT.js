import { c as isToday } from "./helpers-DX2i3Kdq.js";
const avatarText = (value) => {
  if (!value)
    return "";
  const nameArray = value.split(" ");
  return nameArray.map((word) => word.charAt(0).toUpperCase()).join("");
};
const kFormatter = (num) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return Math.abs(num) > 9999 ? `${Math.sign(num) * +(Math.abs(num) / 1e3).toFixed(1)}k` : Math.abs(num).toFixed(0).replace(regex, ",");
};
const formatDate = (value, formatting = { month: "short", day: "numeric", year: "numeric" }) => {
  if (!value)
    return value;
  return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};
const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value);
  let formatting = { month: "short", day: "numeric" };
  if (toTimeForCurrentDay && isToday(date))
    formatting = { hour: "numeric", minute: "numeric" };
  return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};
const prefixWithPlus = (value) => value > 0 ? `+${value}` : value;
export {
  avatarText as a,
  formatDate as b,
  formatDateToMonthShort as f,
  kFormatter as k,
  prefixWithPlus as p
};
