function splitOrEmpty(value, separator) {
  if (value !== void 0 && typeof value === "string" && value.trim().length > 0) {
    return value.split(separator);
  }
  return [];
}
export {
  splitOrEmpty as s
};
